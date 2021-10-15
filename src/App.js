import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import About from "./FighterForm";
import Fighters from "./Fighters";
import FighterBio from "./FighterBio";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/fighters")
      .then((r) => r.json())
      .then((data) => setFighters(data));
  }, []);

  const [fighters, setFighters] = useState([]);
  const [chosen, setChosen] = useState({});

  function onAddFighter(fighter) {
    const newFighter = [...fighters, fighter];
    setFighters(newFighter);
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/fighters/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => setFighters(fighters.filter((fighter) => fighter.id !== id)));
  }

  function handlePickFighter(picked) {
    const clickedFighter = fighters.filter(
      (fighter) => fighter.name === picked
    );
    setChosen(clickedFighter);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/kombatants">
          <Fighters
            fighters={fighters}
            onDelete={handleDelete}
            pickFighter={handlePickFighter}
          />
        </Route>
        <Route exact path="/about">
          <About liftFighterform={onAddFighter} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/kombatants/:id">
          <FighterBio fighter={chosen} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

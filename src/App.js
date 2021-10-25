import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FighterForm from "./FighterForm";
import Fighters from "./Fighters";
import FighterBio from "./FighterBio";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/fighters")
      .then((r) => r.json())
      .then((data) => setFighters(data));
  }, []);

  const [fighters, setFighters] = useState([]);

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

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/kombatants">
          <Fighters fighters={fighters} onDelete={handleDelete} />
        </Route>
        <Route exact path="/addfighter">
          <FighterForm liftFighterform={onAddFighter} />
        </Route>
        <Route exact path="/">
          <Home fighters={fighters} />
        </Route>
        <Route path="/kombatants/:characterId">
          <FighterBio fighters={fighters} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

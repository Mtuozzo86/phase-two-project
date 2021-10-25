import React, { useState } from "react";
// import HighlightedFighter from "./HighlightedFighter";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ fighters }) {
  const [entered, setEntered] = useState("");

  function handleSearch(e) {
    setEntered(e.target.value);
  }
  const filteredFighters = fighters.filter((value) => {
    if (entered === "") {
      return null;
    } else if (value.name.toLowerCase().includes(entered.toLowerCase())) {
      return value.name;
    }
  });

  return (
    <div>
      <h1>Welcome</h1>

      <div className="home-form">
        <input
          onChange={handleSearch}
          value={entered}
          type="text"
          name="name"
          placeholder="Search your fighters..."
        />
      </div>
      {filteredFighters.length === 0 ? (
        <h2>Search Fighters</h2>
      ) : (
        filteredFighters.map((fighter) => {
          return (
            <div key={fighter.id}>
              <h1>
                <Link to={`kombatants/${fighter.name}`}>{fighter.name}</Link>
              </h1>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;

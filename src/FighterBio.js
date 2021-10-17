import React from "react";
import "./Fighter.css";
import { useParams } from "react-router-dom";
import HighlightedFighter from "./HighlightedFighter";

function FighterBio({ fighters }) {
  const params = useParams();

  const character = fighters.find((elem) => elem.name === params.characterId);
  console.log(character);
  
  if (!character) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <HighlightedFighter
        name={character.name}
        image={character.image}
        bio={character.bio}
      />
    </div>
  );
}

export default FighterBio;

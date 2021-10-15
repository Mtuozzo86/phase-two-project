import React from "react";
import Fighter from "./Fighter";

function Fighters({ fighters, onDelete, pickFighter }) {
  const listOfFighters = fighters.map((fighter) => {
    return (
      <Fighter
        key={fighter.id}
        id={fighter.id}
        name={fighter.name}
        image={fighter.image}
        onDelete={onDelete}
        pickFighter={pickFighter}
      />
    );
  });

  return <div>{listOfFighters}</div>;
}

export default Fighters;

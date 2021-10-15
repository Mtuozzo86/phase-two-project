import React from "react";
import "./Fighter.css";

function FighterBio({ fighter }) {
  console.log(fighter);

  return (
    <div>
      <h1>{fighter[0].name}</h1>
      <img src={fighter[0].image} alt={fighter[0].name} />
      <p>{fighter[0].bio}</p>
    </div>
  );
}

export default FighterBio;

{
  /* <div>
      <h1>{fighter[0].name}</h1>
      <img src={fighter[0].image} alt={fighter[0].name} />
      <p>{fighter[0].bio}</p>
    </div> */
}

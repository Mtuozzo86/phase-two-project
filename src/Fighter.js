import React from "react";
import "./Fighter.css";
import { Link } from "react-router-dom";

function Fighter({ id, name, image, onDelete }) {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <div className="fighter">
      <h2>{name}</h2>
      <Link to={`kombatants/${name}`}>
        <img src={image} alt={image} />
      </Link>
      <br />
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
}

export default Fighter;

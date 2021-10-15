import React from "react";
import "./Fighter.css";
import { NavLink } from "react-router-dom";

function Fighter({ id, name, image, onDelete, pickFighter }) {
  function handleDelete() {
    onDelete(id);
  }

  function handleClick() {
    pickFighter(name);
  }

  return (
    <div className="fighter">
      <h2>{name}</h2>
      <NavLink to={`kombatants/${id}`}>
        <img onClick={handleClick} src={image} alt={image} />
      </NavLink>
      <br />
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
}

export default Fighter;

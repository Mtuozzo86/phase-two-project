import React, { useState } from "react";

function About({ liftFighterform }) {
  const [fighter, setFighter] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const fighterForm = {
      name: fighter,
      image: image,
      bio: bio,
    };
    fetch("http://localhost:3001/fighters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fighterForm),
    })
      .then((resp) => resp.json())
      .then((data) => liftFighterform(data));

    setFighter("");
    setImage("");
    setBio("");
  }
  // Handle Name and Image
  function handleFighter(e) {
    setFighter(e.target.value);
  }
  function handleImage(e) {
    setImage(e.target.value);
  }
  function handleBio(e) {
    setBio(e.target.value);
  }

  // Dom Render
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Kombatant</h1>
      <input
        value={fighter}
        type="text"
        name="name"
        placeholder="Fighter Name..."
        onChange={handleFighter}
      />
      <br />
      <input
        value={image}
        type="text"
        name="image"
        placeholder="Enter fighter's image URL"
        onChange={handleImage}
      />
      <br />
      <input
        value={bio}
        type="text"
        name="bio"
        placeholder="Enter description"
        onChange={handleBio}
      />
      <br />
      <input type="submit" name="submit" value="Add Fighter" />
    </form>
  );
}

export default About;

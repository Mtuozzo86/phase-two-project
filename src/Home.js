import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Build your roster here by adding characters and keep notes.</p>
      Search for a fighter...
      <form>
        <input type="text" name="name" placeholder="Search your fighters..." />
        <button value="Search">Search</button>
      </form>
    </div>
  );
}

export default Home;

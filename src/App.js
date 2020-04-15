import React from "react";

function Food({ fav, opt }) {
  return (
    <div>
      <h1>
        I love {fav} ( {opt} )
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Food fav="coffee" opt="ice" />
      <Food fav="beer" />
      <Food fav="stake" opt="beef" />
    </div>
  );
}

export default App;

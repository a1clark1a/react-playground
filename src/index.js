import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import HelloWorld from "./state_drills/HelloWorld";
import Bomb from "./state_drills/Bomb";
import Gun from "./state_drills/RouletteGun";
import "./index.css";

function RenderAll() {
  return (
    <main className="App">
      <div>
        <h1>HELLO WORLD</h1>
        <HelloWorld />
      </div>
      <div>
        <h1>BOMB</h1>
        <Bomb />
      </div>
      <div>
        <h1>ROULETTEGUN</h1>
        <Gun bulletInChamber={Math.ceil(Math.random() * 8)} />
      </div>
    </main>
  );
}

ReactDOM.render(<RenderAll />, document.getElementById("root"));

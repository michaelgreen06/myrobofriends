import React from "react";
import CardList from "./Components/CardList";
import "./App.css";
import { robots } from "./robots.js";
import "tachyons";

function App() {
  return (
    <div className="tc">
      <CardList robots={robots} />
    </div>
  );
}

export default App;

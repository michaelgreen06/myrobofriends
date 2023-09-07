import { React, useEffect, useState } from "react";
import "./App.css";
import Cardlist from "./components/Cardlist";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";

function App() {
  const [search, setSearch] = useState("");
  // const [robots, setRobots] = useState();
  const filteredRobots = (e) => {
    const text = e.target.value;
    setSearch(text);
    console.log(text);
  };
  return (
    <div className="tc">
      <SearchBox searchChange={filteredRobots} />
      <Scroll>
        <Cardlist robots={robots} />
      </Scroll>
    </div>
  );
}

export default App;

//I am going to use the problem solving framework I previously learned.
//1). understand - know exactly what is being asked.
//2). plan - “Given input X, what are the steps necessary to return output Y?”
//3). divide - Break the problem down into the sub problems then solve the easiest one first

//9/6/23 need to
//add searchChange to SearchBox componenent.
//change robots to be fetched from api
//convert app to use hooks
//9/7 started at 0844

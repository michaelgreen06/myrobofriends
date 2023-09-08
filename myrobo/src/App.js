import { React, useEffect, useState } from "react";
import "./App.css";
import Cardlist from "./components/Cardlist";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";
// import { robots } from "./robots";

function App() {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);
  const handleChange = (e) => {
    const text = e.target.value;
    setSearch(text);
  };
  const filteredRobots = robots.filter((obj) => {
    return obj.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="tc">
      <SearchBox searchChange={handleChange} />
      <Scroll>
        <Cardlist robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;

//I am going to use the problem solving framework I previously learned.
//1). understand - know exactly what is being asked.
//2). plan - “Given input X, what are the steps necessary to return output Y?”
//3). divide - Break the problem down into the sub problems then solve the easiest one first
//9/8 started at 0946

//9/8/23 need to
//change robots to be fetched from api
//convert app to use hooks

//I feel good about setSearch. filtered robots needs work. Is the argument coming from state or is it coming from the
//robots array of user objects? I think the filter should take in the original full array of user objects then filter
//that array so that it only outputs an array that includes robots that have the same text as what is entered into the
//searchbox.

import React, { useEffect, useState } from "react";
import CardList from "./Components/CardList";
import "./App.css";
// import { robots } from "./robots.js";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";

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
  const filteredRobots = robots.filter((user) => {
    return user.name.toLowerCase().inludes(search.toLowerCase());
  });
  return (
    <div className="tc">
      <SearchBox searchChagne={handleChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;

//9/12/23 left off trying to figure out filteredRobots

//filteredRobots isn't right. What do I want it to do? I want it to return a new array of robots that match the text that is
//coming from the SearchBox input. I know what methods I need to use which is helpful cheating. I need to understand what is happening
//The searchbox gets input via text which sets the search state. I need to filter the robots array based on what is coming
//from the searchbox.
//2) plan - how does this work? the filter method takes a function as a test to see what is returned in the new array
//the new array should only contain users that have names that match the user.names in the robots array

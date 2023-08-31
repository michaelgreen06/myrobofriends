import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Cardlist from "./components/Cardlist";
import { robots } from "./robots";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          name="michaelj"
          email="fox@test.net"
          id="1"
        />
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Cardlist robots={robots} />
      </header>
    </div>
  );
}

export default App;

//I am going to use the problem solving framework I previously learned.
//1). understand - know exactly what is being asked.
//2). plan - “Given input X, what are the steps necessary to return output Y?”
//3). divide - Break the problem down into the sub problems then solve the easiest one first

// 1). I need to create a card for each user from the array of user objects. This is going to require doing a loop
//over the array of objects. This will be done in the cardlist component. The cardlist component needs to take in a prop
//of the users. It will then loop over the array of objects to make a card for each object
//2). create the cardlist component w/o worry about where the actual props come from
//3). sub problem is to make the component w/o worrying about where the array comes from

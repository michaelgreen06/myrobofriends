import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  function loop() {
    for (let i = 0; i < robots.length; i++) {
      console.log(robots[i]);
    }
  }
  return loop();
};

export default Cardlist;

//1). Understand
//2). Plan
//3). Divide

//8/31/23 left off w/ code being able to loop through the array from robots.js

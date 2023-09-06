import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robot.id}
            email={robot.email}
            name={robot.name}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;

//1). Understand
//2). Plan
//3). Divide

//8/31/23 left off w/ code being able to loop through the array from robots.js
//9/6/23 09:07 i believe my task is to get the cardlist to populate the info in robots.js

//1. The problem is to get the cardlist component to show a card for each individual user
//2. I now have robots.js which means I don't have to worry about fetching. I am pretty sure I need to bring in the card component
//and loop through it w/ info from each user object.
//3. What is the smallest sub problem I can solve? I know I need to use the card component.

//I cheated to know that the return contains a div that contains a map function and also that the card component is used
//somwhere w/in this return. I want to use the map function to iterate through the users array and want have each iteration
//return a new card for each user. So I'm mapping over the array of user objects. I will cheat again in 30min if I can't
//figure it out on my own in the meantime. The map method needs a function. I don't know what that function shold do.
//I do know that I want the array of user objects to get iterated over.

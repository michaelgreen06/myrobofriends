import React from "react";

const Scroll = (props) => {
  return <div style={{ overflowY: "scroll", maxHeight: "700px" }}>{props.children}</div>;
};

export default Scroll;

//This component is going to wrap the Cardlist component and will make scrolling section that is a certain height
//this will scroll through the robots so that the top search bar won't disappear

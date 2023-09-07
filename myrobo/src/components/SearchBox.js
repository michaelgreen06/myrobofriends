import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

//I need to add functionality to this component so it actually does something when the search field changes
//pretty confident that I use the onchange event to make this happen. I also believe I pass the onchange event a function
//but I'm unsure of where I define that function. from memory, I believe i define it in the app component and that it has
//something to do w/ filtered robots. The robots get filtered when there is text typed in the searchbox. I remember I use
//filter method and I also know I need to convert to lowercase. What I don't know is where this needs to happen. Pretty confident
//I remember this happening in the App component. I think I will need to add some props to the searchbox function
//1). Get the cards shown to change when text is entered into the input searchbox
//2). plan - the onchange event for the input tag will take a function searchChange that filters the robots w/ the
//filter method and tolowercase methods.
//3). divide - get console to show the text that I type
//looks like I have to use state in order to get the search box to communicate w/ the CardList

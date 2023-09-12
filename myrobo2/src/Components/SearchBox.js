import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3 ma3">
      <input
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
        className="pa3"
      />
    </div>
  );
};

export default SearchBox;

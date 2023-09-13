import React from "react";

const SearchBox = ({ searchChange, value }) => {
  return (
    <div className="pa3 ma3">
      <input
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
        className="pa3"
        value={value}
      />
    </div>
  );
};

export default SearchBox;

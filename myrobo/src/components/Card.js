import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div>
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        alt={`${name}'s profile pic`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;

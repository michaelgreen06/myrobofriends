import React from "react";

export default function Card({ name, email, id }) {
  return (
    <div>
      <img
        alt="profile pic"
        src={`https://robohash.org/${id}?200x200`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

import React from "react";

export default function Card({ name, email, id }) {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <div>
        <img
          alt="profile pic"
          src={`https://robohash.org/${id}?size=200x200`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

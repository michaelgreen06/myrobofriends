import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const userList = robots.map((user) => (
    <Card
      key={user.id}
      id={user.id}
      name={user.name}
      email={user.email}
    />
  ));
  return <div>{userList}</div>;
};

export default CardList;

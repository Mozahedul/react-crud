import React from "react";
import { useStateValue } from "../context/GlobalState";
import Heading from "./Heading";
import UserList from "./UserList";

const Home = () => {
  const [{ todoList }] = useStateValue();
  console.log(todoList);
  return (
    <div className="Home">
      <Heading />
      {todoList.map((listValue) => (
        <UserList key={listValue.id} name={listValue.name} id={listValue.id} />
      ))}
    </div>
  );
};

export default Home;

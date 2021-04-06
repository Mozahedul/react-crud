import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
// import { useStateValue } from "../context/GlobalState";

const UserList = ({ name, id }) => {
  // const [{ todoList }] = useStateValue();
  // console.log(todoList);
  return (
    <ListGroup>
      <ListGroupItem className="d-flex">
        {/* {todoList.map((itemVal) => (
          <strong>{itemVal.name}</strong>
        ))} */}
        <strong>{name}</strong>
        <div className="ml-auto">
          <Link className="btn btn-warning btn-sm mr-1" to="/edit/1">
            Edit
          </Link>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default UserList;

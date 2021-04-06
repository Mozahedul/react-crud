import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useStateValue } from "../context/GlobalState";

const AddUser = () => {
  const [user, setUser] = useState("");
  const [, dispatch] = useStateValue();
  const history = useHistory();
  // console.log(user);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      item: {
        name: user,
        id: Date.now(),
      },
    });

    history.push("/");
  };

  return (
    <Container>
      <Form onSubmit={submitHandle}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Insert Text"
            value={user}
            required
            onChange={(event) => setUser(event.target.value)}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </Container>
  );
};

export default AddUser;

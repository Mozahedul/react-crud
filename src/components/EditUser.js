import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Input, Label } from "reactstrap";

const EditUser = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Insert Text" />
        </FormGroup>

        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </Container>
  );
};

export default EditUser;

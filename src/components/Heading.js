import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const Heading = () => {
  return (
    <div>
      <Navbar color="dark" dark className="mb-4">
        <Container>
          <NavbarBrand href="/">User List</NavbarBrand>
          <Nav>
            <NavItem>
              <Link to="/add" className="btn btn-primary">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;

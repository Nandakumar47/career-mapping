import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#home">Career Path</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

import React from "react";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavbarInput() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/">
      <Link to="/">
        <Button>Back To Web</Button>
      </Link>
      <Nav.Item>
        <Nav.Link href="/input">Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/merk">Merk</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/carousel">Carousel</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavbarInput;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavbarScroll() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand className="mt-2" href="/">
          MetaTechnoMandiri
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-3 p-2" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link className="nvlink" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="nvlink" href="#action2">
              Product
            </Nav.Link>
            <Nav.Link className="nvlink" href="#action2">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;

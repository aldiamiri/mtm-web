import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./OurProduct.css";

function OurProduct() {
  return (
    <div data-aos="fade-up" className=" container mt-5 justify-content-center">
      <h1 className="header-1">OUR</h1>
      <h1 className="header-2">PRODUCT</h1>
      <hr></hr>
      <Row xs={1} md={2} lg={4} className="justify-content-center g-3 mt-3 ">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col className="d-flex justify-content-center">
            <Card className="crd" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.pinimg.com/736x/2e/ff/d2/2effd20dff80405e62f1fa271247fe17.jpg" />
              <Card.Body className="crb">
                <Card.Title>ASUS - X3345</Card.Title>
                <Card.Text>
                  <p>Spec :</p>
                  <p>Price :</p>
                </Card.Text>
                <Button variant="outline-primary">Order Via Wa</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurProduct;

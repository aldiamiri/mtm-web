import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lenovo from "./assets/lenovo.png";
import asus from "./assets/asus.jpg";
import hp from "./assets/hp.jpeg";
import acer from "./assets/acer.png";
import axioo from "./assets/axioo.png";
import "./Support.css";

function Support() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <h1>AVAILABLE</h1>
          <hr></hr>
          <Col data-aos="fade-down">
            <img className="logo-asus" src={asus} alt="asus-logo"></img>
            <img className="logo-lenovo" src={lenovo} alt="lenovo-logo"></img>
            <img className="logo-hp" src={hp} alt="hp-logo"></img>
            <img className="logo-acer" src={acer} alt="acer-logo"></img>
            <img className="logo-axioo" src={axioo} alt="acer-axioo"></img>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Support;

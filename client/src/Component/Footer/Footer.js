import React from "react";
import "./Footer.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import whatsapp from "./assets/whatsapp.png";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

function Footer() {
  return (
    <div className="mt-2">
      <Card data-aos="fade-side" className="border-0 crd">
        <Card.Body>
          <Row className="rowset">
            <Col xs>
              <br></br>
              <h2 className="mt-2 header-ft">Meta Techno Mandiri</h2>
              <p>Jln. Perkamil Raya Malendeng Manado</p>
              <br></br>
              <h3 className="mt-3">Follow Us</h3>
              <img className="fb mt-1" src={facebook} style={{ height: "43px" }} alt="facebook" />
              <img className="ig mt-1" src={instagram} style={{ height: "35px" }} alt="instagram" />
              <img className="wa mt-1" src={whatsapp} style={{ height: "35px" }} alt="whatsapp" />
              <br></br>
            </Col>
          </Row>
        </Card.Body>
        <hr></hr>
        <p className="ftgraft">@2022 PT.Meta Techno Mandiri Privacy Policy All Rights. Design By Meta Techno Mandiri </p>
      </Card>
    </div>
  );
}

export default Footer;

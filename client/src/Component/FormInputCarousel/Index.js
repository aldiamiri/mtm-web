import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavbarInput from "../NavbarInput/NavbarInput";
import Table from "react-bootstrap/Table";

function InpuCarousel() {
  return (
    <Container className="mt-5">
      <NavbarInput />
      <h1 className="mt-5">Tambah Caurosel</h1>
      <hr></hr>
      <Form className="mt-4">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="4" xs="4" md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            Nama Image
          </Form.Label>
          <Col md="7" sm="7" xs="7" lg="5">
            <Form.Control type="text" placeholder="Nama Image" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formFile">
          <Form.Label column sm="4" xs="4" md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            Select Image
          </Form.Label>
          <Col md="7" sm="7" xs="7" lg="5">
            <Form.Control type="file" />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <br></br>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Image</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button variant="warning">Edit</Button> <Button variant="danger">Hapus</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default InpuCarousel;

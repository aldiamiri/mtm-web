import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavbarInput from "../NavbarInput/NavbarInput";
import Table from "react-bootstrap/Table";
import axios from "axios";

function InputData() {
  const url = "http://localhost:4000/api/barang/";

  const [datas, setDatas] = useState([]);
  const [initialData, setInitialData] = useState({
    nm_prod: "",
    nm_merk: "",
    desk_brg: "",
    spek_brg: "",
  });

  const { nm_prod, nm_merk, desk_brg, spek_brg } = initialData;

  useEffect(() => {
    axios.get(url).then((res) => {
      setDatas(res.data);
    });
  });

  function handlerChange(e) {
    setInitialData({ ...initialData, [e.target.name]: e.target.value });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    axios.post(url, initialData);
  }

  return (
    <Container className="mt-5">
      <NavbarInput />
      <h1 className="mt-5">Input Data</h1>
      <hr></hr>
      <Form className="mt-4" onSubmit={handlerSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="4" xs="4" md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            Nama Produk
          </Form.Label>
          <Col md="7" sm="7" xs="7" lg="5">
            <Form.Control value={nm_prod} name="nm_prod" onChange={handlerChange} type="text" placeholder="Nama Produk" />
          </Col>
        </Form.Group>

        {/*  */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="4" xs="4" md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            Merk
          </Form.Label>
          <Col md="6" sm="6" xs="6" lg="5">
            <Form.Select value={nm_merk} aria-label="Default select example">
              <option>Pilih Merk</option>
              <option name="One" value={nm_merk}>
                One
              </option>
              <option name="Two" value={nm_merk}>
                Two
              </option>
              <option name="Three" value={nm_merk}>
                Three
              </option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/*  */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="4" xs="4" md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            Deskripsi
          </Form.Label>
          <Col md="7" sm="7" xs="7" lg="5">
            <Form.Control value={desk_brg} name="desk_brg" onChange={handlerChange} type="text" placeholder="Deskripsi Barang" />
          </Col>
        </Form.Group>

        {/*  */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="4" xs="4" md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            Spesifikasi
          </Form.Label>
          <Col md="7" sm="7" xs="7" lg="5">
            <Form.Control value={spek_brg} name="spek_brg" onChange={handlerChange} as="textarea" placeholder="Spesifikasi Barang" rows={3} />
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
            <th>Nama Produk</th>
            <th>Merk</th>
            <th>Deskripsi</th>
            <th>Spek Barang</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.nm_prod}</td>
              <td>{data.nm_merk}</td>
              <td>{data.desk_brg}</td>
              <td>{data.spek_brg}</td>
              <td>
                <Button variant="warning">Edit</Button> <Button variant="danger">Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default InputData;

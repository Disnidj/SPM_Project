import * as React from "react";
//import React, { Component } from "react";
//import "../node_modules/bootstrap/scss/bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function ViewSubmitAppointment() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [fuelType, setFuleType] = useState("");
  const [volume, setVolume] = useState("");

  const navigate = useNavigate();

  //id initialize to match the data
  const id = useParams();

  //const [appointment, setAppointment] = useState([]);

  const [AppointmentOnce] = useState({
    vehicleNumber: "",
    vehicleType: "",
    date: "",
    fuelType: "",
    volume: "",
  });

  //   React.useEffect(() => {
  useEffect(function getAppointment() {
    console.log("get ID", id);
    axios
      .get("http://localhost:8000/spm/submittedAppointment/get/" + id.id)
      .then((res) => {
        console.log("date", res);
        // setAppointment(res.data.customer);
        setVehicleNumber(res.data.customer.vehicleNumber);
        setVehicleType(res.data.customer.vehicleType);
        setDate(res.data.customer.date);
        setFuleType(res.data.customer.fuelType);
        setVolume(res.data.customer.volume);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
    // getAppointment();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Col lg={12} md={12} sm={12} className="border border-dark mt-5 ">
            <Col lg={12} md={12} sm={12}>
              <center>
                <h1 className="mt-4 mb-3">Your Appointment</h1>
              </center>
            </Col>
            <center>
              <Col lg={8} md={12} sm={12}>
                <Form className="my-3 mx-4">
                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">
                      Vehicle Number : {vehicleNumber}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">
                      Vehicle Type : {vehicleType}
                    </Form.Label>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">Date : {date}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">
                      Fuel Type : {fuelType}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="v_no">
                    <Form.Label className="left">
                      Volume (L) : {volume}
                    </Form.Label>
                  </Form.Group>
                  <center>
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        class="btn btn-primary"
                        color="green"
                      >
                        Home
                      </button>
                      <button type="button" class="btn btn-secondary">
                        Edit
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                    <div></div> <br></br>
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button type="button" class="btn btn-success">
                        Fuel Summary
                      </button>
                    </div>
                  </center>
                </Form>
              </Col>
            </center>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewSubmitAppointment;

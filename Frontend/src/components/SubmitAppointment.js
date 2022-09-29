import * as React from "react";
//import React, { Component } from "react";
//import "../node_modules/bootstrap/scss/bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function SubmitAppointment() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [fuelType, setFuleType] = useState("");
  const [volume, setVolume] = useState("");

  let navigate = useNavigate();

  const handleVehicleType = (event) => {
    setVehicleType(event.target.value);
  };

  const handleFuelType = (event) => {
    setFuleType(event.target.value);
  };

  function submitButton(e) {
    e.preventDefault();
    console.log("start function");
    if (
      vehicleNumber == "" ||
      vehicleType == "" ||
      date == "" ||
      fuelType == "" ||
      volume == ""
    ) {
      alert("Fill All The Details!");
    } else {
      const newAppointment = {
        vehicleNumber,
        vehicleType,
        date,
        fuelType,
        volume,
      };

      console.log(newAppointment);
      axios
        .post(
          "http://localhost:8000/spm/submittedAppointment/add",
          newAppointment
        )
        .then((res) => {
          alert("Appointment Submitted");
          console.log(res);
          localStorage.setItem("appointmentID", res.data._id);

          console.log(localStorage.getItem("appointmentID"));
          navigate("ViewSubmittedAppointment/" + res.data._id);
        })
        .catch((err) => {});
    }
  }

  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Col lg={12} md={12} sm={12} className="border border-dark mt-5 ">
            <Col lg={12} md={12} sm={12}>
              <center>
                <h1 className="mt-4 mb-3">Make an Appointment</h1>
              </center>
            </Col>
            <center>
              <Col lg={8} md={12} sm={12}>
                <Form className="my-3 mx-4" onSubmit={(e) => submitButton(e)}>
                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">Vehicle Number :</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="ABCXXXX"
                      maxLength={7}
                      onChange={(e) => {
                        setVehicleNumber(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">Vehicle Type :</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      required
                      value={vehicleType}
                      onChange={handleVehicleType}
                    >
                      <option>Select</option>
                      <option value="Car">Car</option>
                      <option value="Van">Van</option>
                      <option value="SUV">SUV</option>
                      <option value="Lorry">Lorry</option>
                      <option value="Bus">Bus</option>
                      <option value="Bike">Bike</option>
                      <option value="Three Wheel">Three Wheel</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="v_no">
                    <Form.Label className="left">Date :</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="12 May 2016"
                      required
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="v_type">
                    <Form.Label className="left">Fuel Type :</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      required
                      value={fuelType}
                      onChange={handleFuelType}
                    >
                      <option>Select</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="v_no">
                    <Form.Label className="left">Volume (L) :</Form.Label>
                    <Form.Control
                      type="number"
                      maxLength={3}
                      required
                      onChange={(e) => {
                        setVolume(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <center>
                    <Button
                      className="mt-4 mb-4"
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
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

export default SubmitAppointment;

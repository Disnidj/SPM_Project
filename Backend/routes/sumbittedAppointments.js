const router = require("express").Router();

//const { Router } = require("express");

let SubmittedAppointments = require("./../models/SubmittedAppointment.js");

router.route("/add").post(async (req, res) => {
  const vehicleNumber = req.body.vehicleNumber;
  const vehicleType = req.body.vehicleType;
  const date = req.body.date;
  const fuelType = req.body.fuelType;
  const volume = req.body.volume;

  const newSubmittedAppointments = new SubmittedAppointments({
    vehicleNumber,
    vehicleType,
    date,
    fuelType,
    volume,
  });

  console.log(newSubmittedAppointments);

  // newSubmittedAppointments.save
  //   .then(() => {
  //     res.json("Appointment Submitted");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  try {
    await newSubmittedAppointments.save();
    res.json(newSubmittedAppointments);
  } catch (error) {
    console.log(error);
  }
});

//get submitted appointment details
router.route("/get/:id").get(async (req, res) => {
  let id = req.params.id;

  const customer = await SubmittedAppointments.findById(id)
    .then((customer) => {
      res.status(200).send({ status: "Appointment Details", customer });
    })
    .catch((err) => {
      res.status(200).send({
        status: "Error while getting appointment",
        error: err.messege,
      });
    });
});
module.exports = router;

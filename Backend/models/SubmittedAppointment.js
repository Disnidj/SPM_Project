const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const SubmittedAppointmentsSchema = new Schema({
  vehicleNumber: {
    type: String,
    required: true,
  },

  vehicleType: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  fuelType: {
    type: String,
    required: true,
  },

  volume: {
    type: String,
    required: true,
  },
});

const SubmittedAppointment = mongoose.model(
  "SubmittedAppointment",
  SubmittedAppointmentsSchema
);
module.exports = SubmittedAppointment;

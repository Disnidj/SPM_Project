//import react
import React from "react";
//import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Disni
import Home from "./components/Home";
import EmpAttendaceMark from "./components/EmpAttendaceMark";
import EmpViewAllAttendance from "./components/EmpViewAllAttendance";
import EmpAttendanceUpdate from "./components/EmpAttendanceUpdate";
import EmpViewOneAttendance from "./components/EmpViewOneAttendance";

import EmpLeaveFormCreate from "./components/EmpLeaveFormCreate";
import EmpViewAllLeaves from "./components/EmpViewAllLeaves";
import EmpLeaveEdit from "./components/EmpLeaveEdit";
import EmpLeaveViewOne from "./components/EmpLeaveViewOne";

import AdminCheckLeave from "./components/AdminCheckLeave";
import AdminLeaveViewAll from "./components/AdminLeaveViewAll";

import SubmittedAppointment from "./components/SubmitAppointment";
import SubmitAppointment from "./components/ViewSubmittedAppointment";
import ViewSubmittedAppointment from "./components/ViewSubmittedAppointment";
export default function App() {
  return (
    <div className="App">
      <Router>
        {/* Disni */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/EmpAttendaceMark"
            element={<EmpAttendaceMark />}
          ></Route>
          <Route
            path="/EmpViewAllAttendance"
            element={<EmpViewAllAttendance />}
          ></Route>
          <Route
            path="/EmpAttendanceUpdate/:id"
            element={<EmpAttendanceUpdate />}
          ></Route>
          <Route
            path="/EmpViewOneAttendance/:id"
            element={<EmpViewOneAttendance />}
          ></Route>
          <Route
            path="/EmpLeaveFormCreate"
            element={<EmpLeaveFormCreate />}
          ></Route>
          <Route
            path="/EmpViewAllLeaves"
            element={<EmpViewAllLeaves />}
          ></Route>
          <Route path="/EmpLeaveEdit/:id" element={<EmpLeaveEdit />}></Route>
          <Route
            path="/EmpLeaveViewOne/:id"
            element={<EmpLeaveViewOne />}
          ></Route>
          <Route
            path="/AdminCheckLeave/:id"
            element={<AdminCheckLeave />}
          ></Route>
          <Route
            path="/AdminLeaveViewAll"
            element={<AdminLeaveViewAll />}
          ></Route>
          <Route path="/a" element={<SubmittedAppointment />}></Route>

          <Route
            path="/submitAppointment"
            element={<SubmitAppointment />}
          ></Route>

          <Route
            path="/a/viewSubmittedAppointment/:id"
            element={<ViewSubmittedAppointment />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

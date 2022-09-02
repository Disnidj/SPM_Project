import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <a href="/EmpAttendaceMark"> <button className="btn btn-warning"  > Attendance Mark </button></a>
        <a href="/EmpViewAllAttendance"> <button className="btn btn-warning"  > Attendance view all </button></a>
        <a href="/EmpLeaveFormCreate"> <button className="btn btn-warning"  > Submit leave form </button></a>
        <a href="/EmpViewAllLeaves"> <button className="btn btn-warning"  > leave forms </button></a>
        <a href="/AdminLeaveViewAll"> <button className="btn btn-warning"  > admin view leave forms </button></a>
        
      </div>
    )
  }
}

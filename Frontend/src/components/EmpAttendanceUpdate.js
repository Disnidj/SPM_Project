//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";

function AttendanceUpdate() {

  //track the states in function and set values with useState 
  const [Emp_Name, setEmp_Name]=useState("");
  const [Emp_ID, setEmp_ID]=useState("");
  const [Date, setDate]=useState("");
  const [Shift, setShift]=useState("");
  const [Time_In, setTime_In]=useState("");
  const [Time_Out, setTime_Out]=useState("");
  // const [Total_Hours_per_Day,  setTotal_Hours_per_Day]=useState("");
  // const [Total_Hours_per_Month,setTotal_Hours_per_Month]=useState("");

  //id initialize to match the data
  const id=useParams();

  const [AttendanceUpdate]=useState({

          Emp_Name:"",
          Emp_ID:"",
          Date:"",
          Shift:"",
          Time_In:"",
          Time_Out:"",
          // Total_Hours_per_Day:"",
          // Total_Hours_per_Month:""
  })


  //target.value use to get an input value from keyboard
  const handle_Emp_Name_Change = (e)=>{
    e.preventDefault();
    setEmp_Name(e.target.value);
    
    //validation
    if (Number(e.target.value)) {
     alert("Name Cannot Contain Numerical Value!");
   }
  
    
  } 

  const handle_Emp_ID_Change=(e)=>{
    e.preventDefault();
    setEmp_ID(e.target.value)

  //validation
  if ((e.target.value).length>7) {
    alert("Limit Exceeded!");
  }

  }

//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
  e.preventDefault();

  console.log("data");

  const formData = new FormData();

  formData.append("Emp_Name",Emp_Name);
  formData.append("Emp_ID",Emp_ID);
  formData.append("Date",Date);
  formData.append("Shift",Shift);
  formData.append("Time_In",Time_In);
  formData.append("Time_Out",Time_Out);
  // formData.append("Total_Hours_per_Day",Total_Hours_per_Day);
  // formData.append("Total_Hours_per_Month",Total_Hours_per_Month);


        setEmp_Name("");
        setEmp_ID("");
        setDate("");
        setShift("");
        setTime_In("");
        setTime_Out("");
        // setTotal_Hours_per_Day("");
        // setTotal_Hours_per_Month("");

console.log(formData.get('Emp_Name'));

AttendanceUpdate.Emp_Name=formData.get('Emp_Name');
AttendanceUpdate.Emp_ID=formData.get('Emp_ID');
AttendanceUpdate.Date=formData.get('Date');
AttendanceUpdate.Shift=formData.get('Shift');
AttendanceUpdate.Time_In=formData.get('Time_In');
AttendanceUpdate.Time_Out=formData.get('Time_Out');
// AttendanceUpdate.Total_Hours_per_Day=formData.get('Total_Hours_per_Day');
// AttendanceUpdate.Total_Hours_per_Month=formData.get('Total_Hours_per_Month');

console.log(AttendanceUpdate);


//update process 
console.log(id)
await axios.put(`http://localhost:8000/UpdateAttendance/${id?.id}`,AttendanceUpdate)
.then(res=>{
  console.log("Return Data",res);
  alert("Update Success!!");

})
.catch(err=>{
  alert("Update Failed!!");
  console.log(err);
});

}

//page refresh function
function refreshPage() {
  window.location.reload(false);
}




//get one data to update
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:8000/GetOneAttendance/${id?.id}`)
  .then(res=>{
    console.log("data",res);
    setEmp_Name(res.data.oneAttendance.Emp_Name)
    setEmp_ID(res.data.oneAttendance.Emp_ID)
    setDate(res.data.oneAttendance.Date)
    setShift(res.data.oneAttendance.Shift)
    setTime_In(res.data.oneAttendance.Time_In)
    setTime_Out(res.data.oneAttendance.Time_Out)
    // setTotal_Hours_per_Day(res.data.oneAttendance.Total_Hours_per_Day)
    // setTotal_Hours_per_Month(res.data.oneAttendance.Total_Hours_per_Month)
 
  }).catch(err => console.log(err));



},[]);



  return (
          <div>


            <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>MARK YOUR ATTENDANCE</h1>
                <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
            </div>

              

            <div style={{backgroundColor:'#d9d9d9', marginTop:'70px'}}>

              <br/>

              <button className="btn btn-success" style={{marginLeft:'100px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
              <a href="/EmpViewAllAttendance"
              style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
              <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>

         
              <form style={{width:'50%', marginLeft:'450px'}}>
                        <div className="form-group">
                        <h4>Emp Name</h4>
                            <input type="text"
                            className="form-control"
                            name="Emp_Name"
                            onChange={(e) => handle_Emp_Name_Change(e)} 
                            value={Emp_Name}
                            required='true'
                            />
                        </div>

                        <div className="form-group">
                        <h4>Emp ID</h4>
                            <input type="text"
                            className="form-control"
                            name="Emp_ID"
                            onChange={(e) => handle_Emp_ID_Change(e)}
                            value={Emp_ID}
                            required='true'
                            />
                        </div>

                        <div className="form-group">
                        <h4>Date</h4>
                            <input type="date"
                            className="form-control"
                            name="Date"
                            onChange={e => setDate(e.target.value)}
                            value={Date}
                            required='true'
                            />
                        </div>

                        <div className='form-group'>
                             <h4>Shift</h4>
                              <select
                              id="Shift" 
                              className="form-control"
                              name="Shift"
                              placeholder="Select Your Shift"
                              value={Shift}
                              onChange={e => setShift(e.target.value)}  required='true'>
                                      <option value=" ">Choose</option>
                                      <option value="Day">Day</option>
                                      <option value="Night">Night</option>
                                      <option value="Part Time">Part Time</option>
                                          
                              </select>
                        </div>

                        <div className="form-group">
                        <h4>Time_In</h4>
                            <input type="time"
                            className="form-control"
                            name="Time_In"
                            onChange={e => setTime_In(e.target.value)}
                            value={Time_In}
                            required='true'
                            />
                        </div>

                        <div className="form-group">
                        <h4>Time_Out</h4>
                            <input type="time"
                            className="form-control"
                            name="Time_Out"
                            onChange={e => setTime_Out(e.target.value)}
                            value={Time_Out}
                            required='true'
                            />
                        </div>

                        {/* <div className="form-group">
                        <h2>Total_Hours_per_Day</h2>
                            <input type="text"
                            className="form-control"
                            name="Total_Hours_per_Day"
                            onChange={e => setTotal_Hours_per_Day(e.target.value)}
                            value={Total_Hours_per_Day}
                             required='true'
                            />
                        </div>

                        <div className="form-group">
                        <h2>Total_Hours_per_Month</h2>
                            <input type="text"
                            className="form-control"
                            name="Total_Hours_per_Month"
                            onChange={e => setTotal_Hours_per_Month(e.target.value)}
                            value={Total_Hours_per_Month}
                             required='true'
                            />
                        </div> */}
                        
              </form>
                   
              <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"200px", 
                      marginLeft:"600px",backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
                      <i class="fa-solid fa-pen-to-square"></i>
                      &nbsp; UPDATE
              </button>

              <button className="btn btn-warning" style={{marginLeft:'70px',width:"200px",marginTop:'15px'}}
              onClick={refreshPage}>  
              <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp;Refresh
              </button>
              
              <br/> <br/><br/>
          </div>
                
       </div>
  )
}

export default AttendanceUpdate
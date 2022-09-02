import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const EmpAttendaceMark = () => {

    //to navigate to anohter page or the same page
    const navigate=useNavigate();

    //use state to track state in function components
    const [Emp_Name, setEmp_Name]=useState("");
    const [Emp_ID, setEmp_ID]=useState("");
    const [Date, setDate]=useState("");
    const [Shift, setShift]=useState("");
    const [Time_In, setTime_In]=useState("");
    const [Time_Out, setTime_Out]=useState("");
    // const [Total_Hours_per_Day,  setTotal_Hours_per_Day]=useState("");
    // const [Total_Hours_per_Month,setTotal_Hours_per_Month]=useState("");


    //handle the input data 
    
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

    const handle_Date_Change=(e)=>{
      e.preventDefault();
      setDate(e.target.value)
    }

    const handle_Shift_Change=(e)=>{
      e.preventDefault();
      setShift(e.target.value)
    }

    const handle_Time_In_Change=(e)=>{
      e.preventDefault();
      setTime_In(e.target.value)
    }

    const handle_Time_Out_Change=(e)=>{
      e.preventDefault();
      setTime_Out(e.target.value)
    }

    // const handle_Total_Hours_per_Day_Change=(e)=>{
    //   e.preventDefault();
    //   setTotal_Hours_per_Day(e.target.value)
    // }

    // const handle_Total_Hours_per_Month_Change=(e)=>{
    //   e.preventDefault();
    //   setTotal_Hours_per_Month(e.target.value)
    // }


    // clear all input values
      const resetInputField = () => {
        setEmp_Name("");
        setEmp_ID("");
        setDate("");
        setShift("");
        setTime_In("");
        setTime_Out("");
        // setTotal_Hours_per_Day("");
        // setTotal_Hours_per_Month("");
      };


     
      

      //handle the submit data
    const handleSubmit = async (e)=>{
      e.preventDefault();

      if(Emp_Name===''|| Emp_ID===''||Date===''|| Shift===''|| Time_In===''||Time_Out===''){
        alert("Fill All The Details!!")

      }else {

        let newAttendace={
          Emp_Name:Emp_Name,
          Emp_ID:Emp_ID,
          Date:Date,
          Shift:Shift,
          Time_In:Time_In,
          Time_Out:Time_Out,
          // Total_Hours_per_Day:Total_Hours_per_Day,
          // Total_Hours_per_Month:Total_Hours_per_Month
        }

        console.log("Sending Attendance Details...",newAttendace);

        let data= await axios.post('http://localhost:8000/EmpAttendace/Save',{
          Emp_Name:Emp_Name,
          Emp_ID:Emp_ID,
          Date:Date,
          Shift:Shift,
          Time_In:Time_In,
          Time_Out:Time_Out,
          // Total_Hours_per_Day:Total_Hours_per_Day,
          // Total_Hours_per_Month:Total_Hours_per_Month
        });

        

        console.log("Saved Data : ",data);

        if(data.status !== 200){
          alert("Data Didnt Store")
        }
        else{
      
          alert("You Are Saving The Data")
          navigate('/EmpViewAllAttendance')
        }

      }

  
    }


  return (
    <div>


            <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>MARK YOUR ATTENDANCE</h1>
                <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
            </div>


            <div style={{backgroundColor:'#d9d9d9', marginTop:'70px'}}>
              <br/>
              
              <button className="btn btn-success" style={{marginLeft:'70px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
              <a href="/EmpViewAllAttendance"
              style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
              <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
              </button>

            <div style={{width:'800px', marginLeft:'350px',backgroundColor:'#8c9090'}}>
              <br/>
                <center><h2>FILL THE DETAILS</h2></center>
              <br/> 
              
               <form onSubmit={(e) => handleSubmit(e)} >
                <table className='table' >
                  <tr>
                    <td>
                    <div className='form-group' >
                     <label>Employee Name :</label><br />
                        <input 
                        type='text' 
                        value={Emp_Name} 
                        placeholder="Enter Your Name With Initials"
                        className='form-control' 
                        style={{ marginBottom: '20px' }} 
                        onChange={(e) => handle_Emp_Name_Change(e)} 
                        required='true' />
                    </div>
                    </td>
                      <td >
                        <div className='form-group'>
                            <label>Employee ID :</label><br />
                              <input 
                              type='text' 
                              value={Emp_ID} 
                              placeholder="Enter Your Emp ID"
                              className='form-control' 
                              style={{ marginBottom: '20px' }} 
                              onChange={(e) => handle_Emp_ID_Change(e)} 
                              required='true' />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> 
                        <br/>   
                        <div className='form-group'>
                            <label>Date :</label><br />
                              <input 
                              type='date' 
                              value={Date} 
                              className='form-control' 
                              style={{ marginBottom: '20px' }} 
                              onChange={(e) => handle_Date_Change(e)} 
                              required='true' />
                        </div>
                      </td>
                      <td>
                        <div className='form-group'>
                            <label>Shift :</label><br />
                              <select
                              id="Shift" 
                              className="form-control"
                              name="Shift"
                              placeholder="Select Your Shift"
                              value={Shift}
                              onChange={(e) => handle_Shift_Change(e)} required='true'>
                                      <option value=" ">Choose</option>
                                      <option value="Day">Day</option>
                                      <option value="Night">Night</option>
                                      <option value="Part Time">Part Time</option>
                                          
                              </select>
                        </div>
                      </td>
                    </tr>
                    <br/> 
                    <tr>
                      <td>
                      <div className='form-group'>
                        <label>Time In :</label><br />
                          <input 
                          type='time' 
                          value={Time_In} 
                          className='form-control' 
                          style={{ marginBottom: '20px' }} 
                          onChange={(e) => handle_Time_In_Change(e)} 
                          required='true' />
                      </div>
                    </td>
                    <td>
                    <div className='form-group'>
                        <label>Time Out:</label><br />
                          <input 
                          type='time' 
                          value={Time_Out} 
                          className='form-control' 
                          style={{ marginBottom: '20px' }} 
                          onChange={(e) => handle_Time_Out_Change(e)} 
                          required='true' />
                    </div>
                    </td>
                    </tr>

                     {/* <div className='form-group'>
                        <label>Total_Hours_per_Day</label><br />
                          <input 
                          type='text' 
                          value={Total_Hours_per_Day} 
                          className='form-control' 
                          style={{ marginBottom: '20px' }} 
                          onChange={(e) => handle_Total_Hours_per_Day_Change(e)} 
                          required='true' />
                    </div> 

                     <div className='form-group'>
                        <label>Total_Hours_per_Month</label><br />
                          <input 
                          type='text' 
                          value={Total_Hours_per_Month}  
                          className='form-control' 
                          style={{ marginBottom: '20px' }} 
                          onChange={(e) => handle_Total_Hours_per_Month_Change(e)} 
                          required='true' />
                    </div>  */}

                  </table>
                  <div>
                      
                    <table>
                      <tr>
                        <td>
                        <button type='submit' className='btn btn-success' style={{marginLeft:" 270px"}} > 
                        <i class="fa-solid fa-circle-check"></i>
                        &nbsp; SUBMIT</button>
                        </td>
                        
                        <td>
                        <button className="btn btn-warning" onClick={resetInputField} style={{marginLeft:" 50px"}}> 
                        <i class="fa-solid fa-broom"></i>
                        &nbsp; CLEAR</button>
                        </td>
                      </tr>
                      </table>
                     
                    </div>
                </form>
                <br/>
            </div>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>

    </div>
  )
}

export default EmpAttendaceMark
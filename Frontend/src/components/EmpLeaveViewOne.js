//import react
import React from 'react'
//import react hooks 
import {useState, useEffect } from 'react'
//import axios
import axios from 'axios'
//import useParams
import {useParams} from 'react-router-dom';



function EmpLeaveViewOne() {

 //track the states in function and set values with useState 
 const [Today, setToday]=useState("");
 const [Emp_Name, setEmp_Name]=useState("");
 const [Emp_ID, setEmp_ID]=useState("");
 const [Leave_Reason, setLeave_Reason]=useState("");
 const [Leave_Reason_Other, setLeave_Reason_Other]=useState("");
 const [Leave_From, setLeave_From]=useState("");
 const [Leave_To, setLeave_To]=useState("");
 const [Approval, setApproval]=useState("");
 const [Comments, setComments]=useState("");

//id initialize to match the data
const id=useParams();


const [EmpLeaveOne]=useState({

      Today:"",
      Emp_Name:"",
      Emp_ID:"",
      Leave_Reason:"",
      Leave_Reason_Other:"",
      Leave_From:"",
      Leave_To:"",
      Approval:"",
      Comments:""
})

//get one data for a matching ID
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:8000/GetOneLeaveRequest/${id?.id}`)
  .then(res=>{
    console.log("data",res);
    setToday(res.data.OneLeaveReq.Today)
    setEmp_Name(res.data.OneLeaveReq.Emp_Name)
    setEmp_ID(res.data.OneLeaveReq.Emp_ID)
    setLeave_Reason(res.data.OneLeaveReq.Leave_Reason)
    setLeave_Reason_Other(res.data.OneLeaveReq.Leave_Reason_Other)
    setLeave_From(res.data.OneLeaveReq.Leave_From)
    setLeave_To(res.data.OneLeaveReq.Leave_To)
    setApproval(res.data.OneLeaveReq.Approval)
    setComments(res.data.OneLeaveReq.Comments)
   
  }).catch(err => console.log(err));



},[]);




  return (
    <div>


<div >
                <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>YOUR LEAVE FORM</h1>
                <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
                
                <br/>
                
                

            </div>

            <br/>

                <div className='FORM2'style={{ marginTop: '40px', backgroundColor: "#d9d9d9", padding:'10px 20% 10px 20%' }}>
                  <form >

                            <div className='form-group'>
                              <label style={{fontWeight:'700'}} >Today</label>: {Today}   
                            </div>

                        <table className='table' style={{border:"1px solid black"}} >
                          <br/>

                          <tr>
                          <td>
                            <div className='form-group'>
                            <label style={{fontWeight:'700'}}>Employee Name: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {Emp_Name} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Employee ID: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Emp_ID} 
                                
                            </div>
                          </td>
                          </tr>
                          <tr>
                          <td colspan="2">
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Reason For The Leave: </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Leave_Reason} 
                                
                            </div>
                          </td>
                          </tr>
                          <tr>
                          <td colspan="2">
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Reason For "Other": </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                {Leave_Reason_Other} 
                                
                                
                            </div>
                          </td>
                          </tr>
                          <tr>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Leave From:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Leave_From} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Leave To:</label>:
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Leave_To} 
                              
                            </div>
                          </td>
                          </tr>


                          <tr>
                          <td colspan="2">
                            <div>
                              <p>-------------------------------------------------------------------------------------------------------------------------------------------</p>
                              <p style={{marginLeft:'750px'}}>*Manager Only</p>
                            </div>
                          </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='form-group'>
                                  <label style={{fontWeight:'700'}}>Approval:</label><br />
                                  {Approval}
                                  
                              </div>
                          </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <div className='form-group'>
                                  <label style={{fontWeight:'700'}}>Comments:</label><br />
                                  {Comments}
                              </div>
                            </td>
                          </tr>
                          <br/><br/>
                        </table> 

                        
                        
                  </form>

                  <button className="btn btn-success" style={{marginLeft:'370px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                  <a href="/EmpViewAllLeaves"
                  style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                  <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>

                <br/><br/><br/><br/><br/><br/>
              </div>

                           

          </div>

                   
                   

    </div>
  )
}

export default EmpLeaveViewOne
//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";

function EmpLeaveEdit() {

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


  const [EmpLeaveUpdate]=useState({

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



//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
  e.preventDefault();

  console.log("data");

  const formData = new FormData();

  formData.append("Today",Today);
  formData.append("Emp_Name",Emp_Name);
  formData.append("Emp_ID",Emp_ID);
  formData.append("Leave_Reason",Leave_Reason);
  formData.append("Leave_Reason_Other",Leave_Reason_Other);
  formData.append("Leave_From",Leave_From);
  formData.append("Leave_To",Leave_To);
  formData.append("Approval",Approval);
  formData.append("Comments",Comments);

 

        setToday("");
        setEmp_Name("");
        setEmp_ID("");
        setLeave_Reason("");
        setLeave_Reason_Other("");
        setLeave_From("");
        setLeave_To("");
        setApproval("");
        setComments("");
       
console.log(formData.get('Emp_Name'));

EmpLeaveUpdate.Today=formData.get('Today');
EmpLeaveUpdate.Emp_Name=formData.get('Emp_Name');
EmpLeaveUpdate.Emp_ID=formData.get('Emp_ID');
EmpLeaveUpdate.Leave_Reason=formData.get('Leave_Reason');
EmpLeaveUpdate.Leave_Reason_Other=formData.get('Leave_Reason_Other');
EmpLeaveUpdate.Leave_From=formData.get('Leave_From');
EmpLeaveUpdate.Leave_To=formData.get('Leave_To');
EmpLeaveUpdate.Approval=formData.get('Approval');
EmpLeaveUpdate.Comments=formData.get('Comments');

console.log(EmpLeaveUpdate);


//update process 
console.log(id)
await axios.put(`http://localhost:8000/UpdateLeaveReq/${id?.id}`,EmpLeaveUpdate)
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

              <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                  <br/><br/>
                  <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>EDIT LEAVE FORM</h1>
                  <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>

                  <button className="btn btn-success" style={{padding:'9px 9px',backgroundColor:'#3895d3', marginLeft:'10px'}}>
                  <a href="/EmpViewAllLeaves"
                  style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                  <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>

            </div>
            <br/>

            <div className='FORM2'style={{ marginTop: '40px', backgroundColor: "#d9d9d9", padding:'10px 20% 10px 20%' }}>


           <form>
              <div className="form-group">
              <h2>Today</h2>
                   <input type="date"
                   className="form-control"
                   name="Today"
                   style={{ marginBottom: '20px', width:'300px' }} 
                   onChange={e => setToday(e.target.value)}
                   value={Today}
                  
                   />
              </div>
              <label style={{fontSize:'14px', color:'#d47400', marginLeft:'600px'}}>*Default Type/Pending Results Are "undifined" </label> 
          <table className='table' style={{border:"1px solid black"}} >
            
          <br/>


            <tr>
            <td>
            <div className="form-group">
              <label>Employee Name:</label><br/>
                    <input type="text"
                    className="form-control"
                    style={{ marginBottom: '20px' }} 
                    name="Emp_Name"
                    onChange={e => setEmp_Name(e.target.value)}
                    value={Emp_Name}
                  
                    />
            </div>
            </td>
            <td>
            <div className="form-group">
              <label>Employee ID:</label>
                    <input type="text"
                    className="form-control"
                    style={{ marginBottom: '20px' }} 
                    name="Emp_ID"
                    onChange={e => setEmp_ID(e.target.value)}
                    value={Emp_ID}
                  
                      />
            </div>
            </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="form-group">
            <label>Reason For The Leave:</label><br/>
                <select type="text"
                id='reason'
                className="form-control"
                style={{ marginBottom: '20px' }}
                name="Leave_Reason"
                onChange={e => setLeave_Reason(e.target.value)}
                value={Leave_Reason}>
                  <option value=" ">Choose</option>
                                      <option value="Medical Leave">Medical Leave</option>
                                      <option value="Clinic Day">Clinic Day</option>
                                      <option value="Other">Other</option> 
                </select>
            </div>
            </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="form-group">
            <label>If Its "Other", Type The Reason Here:</label>
                     <input type="text"
                     className="form-control"
                     name="Leave_Reason_Other"
                     style={{ marginBottom: '20px' }}
                     onChange={e => setLeave_Reason_Other(e.target.value)}
                     value={Leave_Reason_Other}
                    
                     />
                   
                 </div>
                 </td>
                 </tr>
                 <tr>
                 <td>
                 <div className="form-group">
                 <label>Leave From:</label><br />
                     <input type="date"
                     className="form-control"
                     name="Leave_From"
                     style={{ marginBottom: '20px' }} 
                     onChange={e => setLeave_From(e.target.value)}
                     value={Leave_From}
                    
                     />
                 </div>
                 </td>
                 <td>
                 <div className="form-group">
                     <label>Leave To:</label><br />
                     <input type="date"
                     className="form-control"
                     name="Leave_To"
                     style={{ marginBottom: '20px' }} 
                     onChange={e => setLeave_To(e.target.value)}
                     value={Leave_To}
                    
                     />
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
                        <label>Approval: </label><br />
                        <select 
                          type='text'
                          id='approval'  
                          className='form-control' 
                          style={{ marginBottom: '20px' }} 
                          value={Approval}
                          >
                            <option value={Approval} >{Approval}</option>
                          

                          </select>
                    </div>
                    </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                      <div className='form-group'>
                          <label>Comments:</label><br />
                          <textarea 
                          class="form-control" 
                          id="Comments" 
                          rows="3"
                          placeholder={Comments}></textarea>
                    </div>
                    </td>
                   </tr>
                   <br/><br/>
                   
                   </table> 
                 </form>

                 
              
              <div>
                <table>
                  <tr>
                    <td>
                      <button className="btn btn-warning" style={{marginLeft:'70px',width:"200px",marginTop:'15px'}}
                      onClick={refreshPage}>  
                      <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp;REFRESH
                      </button>
                   </td>
                   <td>
                      <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"200px", 
                      marginLeft:"350px",backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
                      <i class="fa-solid fa-pen-to-square"></i>
                      &nbsp; UPDATE
                      </button>
                  </td>
                  </tr>
              </table>
            </div>
                 
              <br/> <br/><br/>
    </div>

    </div>
  )
}

export default EmpLeaveEdit
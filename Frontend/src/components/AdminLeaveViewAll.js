//import reat and react component from react
import React, { Component } from 'react'

//import axios
import axios from 'axios'

export default class AdminViewAllLeaves extends Component {

    //initialize constructor to pass the props
    constructor (props) {
        super(props);
        this.state={
        //initializing an array 
        GetAllLeavesEmp:[]
        };
    }

    //calling the method after componenets render to the page
    componentDidMount(){
        this.retrieveEmpLeaveDetalis();
    }


    //get request method
    retrieveEmpLeaveDetalis(){
        axios.get("http://localhost:8000/GetAllLeaveReq").then(res=>{
        console.log(res.data);
        
        //if the request success, store the data to the array 
        if(res.data.success){
            this.setState({
                GetAllLeavesEmp:res.data.existingData
            });
                
                
        }
        })
    }

    //delete function

    onDelete = (id)=>{
        axios.delete(`http://localhost:8000/DeleteLeaveReq/${id}`).then((res)=>{
        this.retrieveEmpLeaveDetalis();
        })
        alert("Deleted succesfully");
    } 


//search data according to the shift and date

filterData(GetAllLeavesEmp,searchKey){
    const result =GetAllLeavesEmp.filter((LeaveData)=>
   
    LeaveData.Today.includes(searchKey)
    )
  
  this.setState({GetAllLeavesEmp:result})
  
  }
  
  handleSearchArea=(e)=>{
  
    const searchKey = e.currentTarget.value;
    
    axios.get("http://localhost:8000/GetAllLeaveReq").then(res=>{
    if(res.data.success){
    
      this.filterData(res.data.existingData,searchKey)
    }
  });
  
  }


  render() {
    return (
      <div>


      <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
        <br/><br/>

        <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>LEAVE FORMS LIST-ADMIN</h1>
        
        <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
        </div>
        <br/> <br/> <br/><br/>

        <button className="btn btn-success" 
          style={{marginLeft:'50px',padding:'8px 8px',backgroundColor:'#3895d3'}}>
          <a href="/" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
          <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
        </button>

        <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px',marginLeft:'170px' }}>
      
          <input
          className="form-control" style={{marginTop:'100px',padding:'10px 50px', marginRight:'1150px'}}
          type="search"
          placeholder="Search Here..."
          name="searchQuery"
          onChange={this.handleSearchArea}>
            </input>
    
        <br></br>
        <p> *Enter Your Name Or The Date To Search</p>
      
      </div>

      <br/>      
              

      <table className="table table-hover" style={{marginTop:'50px',  marginLeft:'170px', width:'1300px'}}>
          <thead>
            <tr style={{fontSize:'20px'}}>
                <th scope="col">NO</th>
                <th scope="col">Date Of Request</th>
                <th scope="col">Emp_Name</th>
                <th scope="col">Emp_ID</th>
                <th scope="col">Reason For The Leave</th>
                <th scope="col">Approval</th>
                <th scope="col"></th>
                <th scope="col"></th>
                

                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllLeavesEmp.map((GetAllLeaveReq,index)=>(
            <tr key ={index}>
              <th scope='row'>{index+1}</th>
              <td>{GetAllLeaveReq.Today}</td>
              <td>{GetAllLeaveReq.Emp_Name}</td>
              <td>{GetAllLeaveReq.Emp_ID}</td> 
              <td>{GetAllLeaveReq.Leave_Reason}</td> 
              <td>{GetAllLeaveReq.Approval}</td>

              <td>
                        <a className ="btn btn-warning" href={`/AdminCheckLeave/${GetAllLeaveReq._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp;
                            <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllLeaveReq._id)}>
                            <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                            </a>  &nbsp;

                        </td>
            </tr>

            
            
                ))} 

          </tbody>

      </table>

</div>
    )
  }
}


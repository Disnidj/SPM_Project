//import react
import React, { Component } from 'react'
//import axios
import axios from 'axios'

export default class ViewAllAttendance extends Component {

//initialize constructor to pass the props
constructor (props) {
    super(props);
    this.state={
      //initializing an array 
      GetAllAtt:[]
    };
  }


 //calling the method after componenets render to the page
 componentDidMount(){
    this.retrieveAttDetalis();
  }

 //get request method
 retrieveAttDetalis(){
    axios.get("http://localhost:8000/GetAllAttendance").then(res=>{
      console.log(res.data);
      
    //if the request success, store the data to the array 
      if(res.data.success){
        this.setState({
          GetAllAtt:res.data.existingData
        });
             
             
       }
    })
}

 //delete function

 onDelete = (id)=>{
  axios.delete(`http://localhost:8000/DeleteAttendance/${id}`).then((res)=>{
    this.retrieveAttDetalis();
  })
  alert("Deleted succesfully");
} 


//search data according to the shift,date,Name and ID

filterData(GetAllAtt,searchKey){
  const result =GetAllAtt.filter((AttData)=>
  AttData.Shift.toLowerCase().includes(searchKey) ||
  AttData.Shift.includes(searchKey)||
  AttData.Emp_Name.toLowerCase().includes(searchKey) ||
  AttData.Emp_Name.includes(searchKey)||
  AttData.Date.includes(searchKey)||
  AttData.Emp_ID.includes(searchKey)
  )

this.setState({GetAllAtt:result})

}

handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:8000/GetAllAttendance").then(res=>{
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

                  <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>ATTENDANCE LIST</h1>
                  
                  <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
                  </div>
                  <br/> <br/> <br/><br/>

                  <button className="btn btn-success" 
                    style={{padding:'8px 8px',backgroundColor:'#3895d3', marginLeft:'50px'}}>
                    <a href="/" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>


                  <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px', marginLeft:'170px'}}>
                
                  <input
                  className="form-control" style={{marginTop:'100px',padding:'10px 50px', width:'1150px'}}
                  type="search"
                  placeholder="Search Here..."
                  name="searchQuery"
                  onChange={this.handleSearchArea}>
                  </input>
          
                  <br></br>
                  <p> *Enter The Date/Shift/Name/ID You Want To Find</p>
              
                  </div>

                 <br/>       
                      

              <table className="table table-hover" style={{marginTop:'50px',  marginLeft:'170px', width:'1300px'}}>
                  <thead>
                    <tr style={{fontSize:'20px'}}>
                        <th scope="col">NO</th>
                        <th scope="col">Emp_Name</th>
                        <th scope="col">Emp_ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Shift</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        
                        {/* <th scope="col">Time in</th>
                        <th scope="col">Time_Out</th> */}
                        {/* <th scope="col">Total_Hours_per_Day</th>
                        <th scope="col">Total_Hours_per_Month</th> */}

                        
                    </tr>
                  </thead>
                  
                  <tbody>

                    {this.state.GetAllAtt.map((GetAllAtt,index)=>(
                    <tr key ={index}>
                      <th scope='row'>{index+1}</th>
                      <td>{GetAllAtt.Emp_Name}</td>
                      <td>{GetAllAtt.Emp_ID}</td> 
                      <td><a href={`EmpViewOneAttendance/${GetAllAtt._id}`} style={{textDecoration:'none' }}>
                          {GetAllAtt.Date}
                          </a>
                      </td> 
                      <td>{GetAllAtt.Shift}</td> 
                      {/* <td>{GetAllAtt.Time_In}</td> 
                      <td>{GetAllAtt.Time_Out}</td>  */}
                      {/* <td>{GetAllAtt.Total_Hours_per_Day}</td> 
                      <td>{GetAllAtt.Total_Hours_per_Month}</td>  */}


                      
                      <td>
                      <a className ="btn btn-warning" href={`/EmpAttendanceUpdate/${GetAllAtt._id}`}>
                          <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllAtt._id)}>
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

//import mongoose
const mongoose = require("mongoose");

//create db schema to store data
const EmpLeaveDataSchema = new mongoose.Schema({
    Today:{
        type:String,
        require:true
    },
     
    Emp_Name:{
        type:String,
        require:true
    },

    Emp_ID:{
        type:String,
        require:true
    },

    Leave_Reason:{
        type:String,
        require:true
    },

    Leave_Reason_Other:{
        type:String
        
    },

    Leave_From:{
        type:String,
        require:true
    },

    Leave_To:{
        type:String,
        require:true
    },

    Approval:{
        type:String
    },
    Comments:{
        type:String
    }
})

module.exports=mongoose.model("Leave_From",EmpLeaveDataSchema);
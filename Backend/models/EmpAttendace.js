//import mongoose

const mongoose=require("mongoose");

//make a db schema to store employee attendace data

const EmpAttendaceSchema = new mongoose.Schema({
    Emp_Name:{
        type:String,
        required:true
    },

    Emp_ID:{
        type:String,
        required:true
    },

    Date:{
        type:String,
        required:true
    },

    Shift:{
        type:String,
        required:true
    },

    Time_In:{
        type:String,
        required:true
    },

    Time_Out:{
        type:String,
        required:true
    },

    // Total_Hours_per_Day:{
    //     type:Number,
    //     required:true
    // },

    // Total_Hours_per_Month:{
    //     type:Number,
        
    // }
});

//pass the schema
module.exports=mongoose.model("EmpAttendace",EmpAttendaceSchema);
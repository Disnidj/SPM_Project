//import mongoose
const mongoose= require("mongoose");

// import cors to disable the cors policy error
const cors= require("cors");

//import express
const express= require("express");


//import body-paser to convert json format data in to server objects
const bodyparser=require("body-parser");

//invoke app 
const app=express();

//middlewares
app.use(bodyparser.json());
app.use(cors());


//import route
const EmpAttendace= require('./routes/EmpAttendace')
const EmpLeaveForm=require('./routes/EmpLeaveForm')

//use server to communicate with routes
app.use(EmpAttendace);
app.use(EmpLeaveForm);

//declare the port to run the backend
const PORT=8000;

//app listen function
app.listen(PORT,()=>{
    console.log("App is running on port ",PORT);
});

//connect db
const DB_URL="mongodb+srv://SPM123:SPM123@spmcluster.ewx26g4.mongodb.net/SPM_Project?retryWrites=true&w=majority";
             


//connect the app with mongo db with mongoose
mongoose.connect(DB_URL).then (()=>{
    console.log("DB connected successfully");
}) .catch((err)=>{
    console.log("DB connection unsuccessful",err);
});

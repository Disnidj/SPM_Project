//import express
const express = require("express");

//import db schema
const EmpAttendance =require("../models/EmpAttendace");

//give access to request function through express router
const router=express.Router();

//Create function
router.post("/EmpAttendace/Save",(req,res)=>{
    let newAttendace = new EmpAttendance(req.body);

    newAttendace.save((err)=>{

        if(err){
            return res.status(400).json(
                {error:err}
            )
        }
        return res.status(200).json({
            success:"Attendace marked successfully"
        });
    });
});

//Get all Attendance results

router.get("/GetAllAttendance",(req,res)=>{
    EmpAttendance.find().exec((err,allAttendace)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200.).json({
                success:true,
                existingData:allAttendace
            });
        
    });
});

//get one attendance

router.get("/GetOneAttendance/:id",(req,res)=>{
    let Attendace_ID= req.params.id;

    EmpAttendance.findById(Attendace_ID,(err,oneAttendance)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            })
        }
        return res.status(200).json({
            success:true,
            oneAttendance
        });
    });
});


//update an attendance

router.put("/UpdateAttendance/:id",(req,res)=>{
    EmpAttendance.findByIdAndUpdate(
        req.params.id, {$set:req.body},
    (err,updateAttendance)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
            
        }
        return res.status(200).json({
            success:"Updated Successfully"
        });
    });

});


//delete an attendance

router.delete("/DeleteAttendance/:id", (req,res)=>{
    EmpAttendance.findByIdAndRemove(req.params.id).exec((err,deletedAttendance)=>{
        if(err){
            return res.status(400).json({
                message:"Delete was unsuccessful",err
            });
            
        }
        return res.json({
            message:"Deleted Successfully",deletedAttendance
        });
    });
});

module.exports=router;
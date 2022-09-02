//import express
const express =require("express")

//import models
const EmpLeaveRequest = require("../models/EmpLeaveForm");

//Declare express routers to connect with functions
const router=express.Router();

//Create Leave request

router.post('/EmpLeaveReq/Save',(req,res)=>{
    let newLeaveForm= new EmpLeaveRequest(req.body);

    newLeaveForm.save((err)=>{

        if(err){
        return res.status(400).json({
            error:err
        });
        }
        return res.status(200).json({
            success:"Form Submitted Successfully"
        });
    });
});


//get all leave forms

router.get("/GetAllLeaveReq",(req,res)=>{
    EmpLeaveRequest.find().exec((err,GetAllReq)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingData:GetAllReq
        });
    });
});

//get one leave request

router.get("/GetOneLeaveRequest/:id",(req,res)=>{
    let ReqID= req.params.id;

    EmpLeaveRequest.findById(ReqID,(err,OneLeaveReq)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            })
        }

        return res.status(200).json({
            success:true,
            OneLeaveReq
        });
    });

});

//update a leave form

router.put("/UpdateLeaveReq/:id",(req,res)=>{
    EmpLeaveRequest.findByIdAndUpdate(
        req.params.id, {$set:req.body},
    (err,updateReq)=>{
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

//delete a request

router.delete("/DeleteLeaveReq/:id", (req,res)=>{
    EmpLeaveRequest.findByIdAndRemove(req.params.id).exec((err,deletedReq)=>{
        if(err){
            return res.status(400).json({
                message:"Delete was unsuccessful",err
            });
            
        }
        return res.json({
            message:"Deleted Successfully",deletedReq
        });
    });
});

module.exports=router;






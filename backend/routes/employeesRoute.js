const express = require('express');
const router = express.Router();
const Employee = require('../models/userModel');
const LeaveRequest = require('../models/leaveRequestModel');

router.post('/register', async (req,res) => {
    let employee = new Employee(req.body);
    await employee.save();
    res.json({"message":"employee registered successfully",registeredEmployee:employee});
});

router.post('/login', async (req,res) => {
    let employee = await Employee.findOne({email:req.body.email});
    res.json(employee);
    if(!employee) {
        res.status(404).json({message:"Employee not found"});
    }
    else {
        res.status(200).json({message:"Employee found",employee:employee});
    }
});

router.get('/leaveRequests', async (req,res) => {
    let leaveRequest = await LeaveRequest.find();
    res.json(leaveRequest);
});

router.post('/leave-requests', async (req,res) => {
    const {leaveType,startDate,endDate,reason,createdBy} = req.body;
    const leaveRequestList = await LeaveRequest.create({leaveType,startDate,endDate,reason,createdBy});
    res.json({"message":"leave request created successfully",leaveRequestList});
});


module.exports = router;

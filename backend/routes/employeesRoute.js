const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employee = require('../models/userModel'); // Assumes you have a model for Employee
const LeaveRequest = require('../models/leaveRequestModel'); // Assumes you have a model for LeaveRequest

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from Authorization header
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SESSION_SECRET); // Use the same secret key used in signing
        req.user = decoded; // Attach user info to request
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(400).json({ msg: 'Token is not valid' });
    }
};

// Register route for new employees
router.post('/register', async (req, res) => {
    try {
        let employee = new Employee(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        employee.password = hashedPassword;
        await employee.save();
        res.json({ message: "Employee registered successfully", registeredEmployee: employee });
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Login route for employees
router.post('/login', async (req, res) => {
    try {
        const employee = await Employee.findOne({ email: req.body.email });
        if (!employee) return res.status(404).json({ message: "Employee not found" });

        const passwordMatch = await bcrypt.compare(req.body.password, employee.password);
        if (!passwordMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: employee._id }, process.env.SESSION_SECRET, { expiresIn: '1d' });
        res.status(200).json({
            message: 'Login successful',
            resCode: 200,
            role: employee.role,
            id: employee._id,
            token: token
        });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Route to fetch all leave requests
router.get('/leaveRequests', async (req, res) => {
    try {
        const leaveRequests = await LeaveRequest.find();
        res.json(leaveRequests);
    } catch (error) {
        console.error("Error fetching leave requests:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Route to create a new leave request
router.post('/leave-requests', async (req, res) => {
    try {
        const { leaveType, startDate, endDate, reason } = req.body;
        const leaveRequest = await LeaveRequest.create({ leaveType, startDate, endDate, reason, createdBy });
        res.json({ message: "Leave request created successfully", leaveRequest });
    } catch (error) {
        console.error("Error creating leave request:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Route to fetch leave requests by employee ID
router.get('/employees/:employeeId/leaveRequests', async (req, res) => {
    try {
        const { employeeId } = req.params;
        const leaveRequests = await LeaveRequest.find({ createdBy: employeeId });
        if (leaveRequests.length === 0) {
            return res.status(404).json({ message: 'No leave requests found for this employee' });
        }
        res.status(200).json(leaveRequests);
    } catch (error) {
        console.error("Error fetching leave requests:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;

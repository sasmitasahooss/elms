const mongoose = require('../Database/mongooseConnection');

const leaveRequestSchema = new mongoose.Schema({
    id: {
        type: String,
        ref: 'User'
    },
    leaveType: {
        type: String,
        enum: ['Sick Leave', 'Vacation Leave', 'Maternity Leave', 'Paternity Leave'],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
    },
    reason: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isRejected: {
        type: Boolean
    },
    rejectedBy: {
        type: String
    }
})

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);

const mongoose = require('../Database/mongooseConnection');

const employeeSchema = new mongoose.Schema({
  id: { 
    type: String, 
},
  leaveRequests: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'LeaveRequest'
  },
  leaveHistory: {
    default: [],
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'LeaveRequest'
  },
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true 
},
  password: { 
    type: String, 
    required: true
 },
  role: {
    type: String,
    default: 'employee'
}
});

module.exports = mongoose.model('Employee', employeeSchema);


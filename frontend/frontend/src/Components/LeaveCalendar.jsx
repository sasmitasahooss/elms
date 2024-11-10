// src/components/LeaveCalendar.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const LeaveCalendar = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Example leave requests data
  const sampleLeaveRequests = [
    {
      id: 1,
      employeeName: 'John Doe',
      leaveType: 'Vacation',
      startDate: '2024-11-08',
      endDate: '2024-11-10',
      reason: 'Family Vacation',
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      leaveType: 'Sick Leave',
      startDate: '2024-11-10',
      endDate: '2024-11-12',
      reason: 'Flu',
    },
    {
      id: 3,
      employeeName: 'Sam Wilson',
      leaveType: 'Vacation',
      startDate: '2024-11-15',
      endDate: '2024-11-20',
      reason: 'Holidays',
    },
  ];

  // Fetch leave requests (this could be an API call in a real app)
  useEffect(() => {
    setLeaveRequests(sampleLeaveRequests);
  }, []);

  // Function to highlight leave dates
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const leaveDates = leaveRequests.map((request) => ({
        start: new Date(request.startDate),
        end: new Date(request.endDate),
      }));

      // Check if any leave request falls on this date
      const isLeaveDate = leaveDates.some(
        ({ start, end }) => date >= start && date <= end
      );

      return isLeaveDate ? 'leave-date' : null;
    }
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Filter leave requests for the selected date
  const selectedDateLeaves = leaveRequests.filter(
    (request) =>
      new Date(request.startDate) <= selectedDate &&
      new Date(request.endDate) >= selectedDate
  );

  return (
    <div className="leave-calendar">
      <h2>Employee Leave Calendar</h2>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={tileClassName}
        />
      </div>

      {/* Leave details for the selected date */}
      <div className="leave-details">
        <h3>Leave Details for {selectedDate.toDateString()}</h3>
        {selectedDateLeaves.length === 0 ? (
          <p>No employees are on leave for this date.</p>
        ) : (
          <ul>
            {selectedDateLeaves.map((leave) => (
              <li key={leave.id}>
                <strong>{leave.employeeName}</strong> - {leave.leaveType}
                <p>Reason: {leave.reason}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeaveCalendar;

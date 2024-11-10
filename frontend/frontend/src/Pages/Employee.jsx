import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
const Employee = () => {
  const [leaveType, setLeaveType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reason, setReason] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/employees/leave-requests',{leaveType,startDate,endDate,reason})
    const result = response.data;
    console.log(result)
  }
  return (
    <>
      <Header />
      <div className="lform flex items-center justify-between gap-70 rounded-lg mt-0 h-[80vh] w-[80vw] ml-20 flex-wrap ">
      <div className="leave-request-form border-2 rounded-lg border-[#0e2d49] flex flex-col items-center h-[80vh] w-[40vw] mt-5 ml-10">
        <h2 className="text-2xl text-[#0e2d49] mt-10 font-bold">Leave Request Form</h2>
        <form action="/employees/leave-requests" onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 mt-10">
          <label  htmlFor="leave-type" className=" w-[100%] border-2 rounded-md px-5 border-[#0e2d49] py-2">
            Leave Type:{" "}
            <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} id="leave-type" name="leave-type">
              <option value="Sick Leave">Sick Leave</option>
              <option value="Vacation Leave">Vacation Leave</option>
              <option value="Maternity Leave">Maternity Leave</option>
              <option value="Paternity Leave">Paternity Leave</option>
            </select>
          </label>
          
          <label htmlFor="start-date" className=" w-[100%] border-2 rounded-md px-5 border-[#0e2d49] py-2">
            Start Date:{" "}
            <input
              type="date"
              id="start-date"
              name="start-date"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label htmlFor="end-date" className=" w-[100%] border-2 rounded-md px-5 border-[#0e2d49] py-2">
            End Date:{" "}
            <input type="date" id="end-date" name="end-date" required value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
          </label>
          <label htmlFor="reason" className=" w-[100%] border-2 rounded-md px-5 flex items-center border-[#0e2d49] py-2">
            Reason: <input type="text" value={reason} onChange={(e) => setReason(e.target.value)}/>
          </label>
          <button type="submit" className="bg-[#0e2d49] text-white px-5 py-2 rounded-md">Apply</button>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-4  rounded-lg  mt-10 md:mt-0">
        <div className="bg-blue-500 p-4 rounded-lg">
          <h3 className="text-white">Sick Leave</h3>
          <p className="text-white">Balance: 5 days</p>
        </div>
        <div className="bg-green-500 p-4 rounded-lg">
          <h3 className="text-white">Vacation Leave</h3>
          <p className="text-white">Balance: 10 days</p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-lg">
          <h3 className="text-white">Maternity Leave</h3>
          <p className="text-white">Balance: 90 days</p>
        </div>
        <div className="bg-red-500 p-4 rounded-lg">
          <h3 className="text-white">Paternity Leave</h3>
          <p className="text-white">Balance: 15 days</p>
        </div>
      </div>
      {/* <div className="leave-balance border-2 rounded-full border-[#0e2d49] flex flex-col items-center justify-center h-[30vh] w-[30vh] mt-10 ">Leave Balance <br />5</div> */}
      </div>
     <div className="leave-history mt-10 w-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Leave History</h2>
      <table className="history-list border-2 rounded-md border-[#0e2d49] w-[80vw]">
        <thead>
          <tr className="border-b-2 bg-[#5ec5d4] border-[#0e2d49]">
            <th className="border-r-2 border-[#0e2d49]">Leave Type</th>
            <th className="border-r-2 border-[#0e2d49]">Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="history-item approved border-b-2 border-[#0e2d49]">
            <td className="border-r-2 border-[#0e2d49]">Sick Leave</td>
            <td className="border-r-2 border-[#0e2d49]">2022-01-01 to 2022-01-03</td>
            <td>Approved</td>
          </tr>
          <tr className="history-item pending border-b-2 border-[#0e2d49]">
            <td className="border-r-2 border-[#0e2d49]">Vacation Leave</td>
            <td className="border-r-2 border-[#0e2d49]">2022-02-01 to 2022-02-05</td>
            <td>Pending</td>
          </tr>
          <tr className="history-item rejected border-b-2 border-[#0e2d49]">
            <td className="border-r-2 border-[#0e2d49]">Maternity Leave</td>
            <td className="border-r-2 border-[#0e2d49]">2022-03-01 to 2022-03-15</td>
            <td>Rejected</td>
          </tr>
        </tbody>
      </table>
    </div> 
    </>
  );
};

export default Employee;

import React from 'react'
import Header from '../Components/Header'
import LeaveCalendar from '../Components/LeaveCalendar'

const Admin = () => {
  return (
    <>
      <Header />
    <div className="leave-request-list mt-10 w-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Leave Request List</h2>
      <table className="request-list border-2 rounded-md border-[#0e2d49] w-[80vw]">
        <thead>
          <tr className="border-b-2 bg-[#5ec5d4] border-[#0e2d49]">
            <th className="border-r-2 border-[#0e2d49]">Employee ID</th>
            <th className="border-r-2 border-[#0e2d49]">Employee Name</th>
            <th className="border-r-2 border-[#0e2d49]">Leave Type</th>
            <th className="border-r-2 border-[#0e2d49]">Start Date</th>
            <th className="border-r-2 border-[#0e2d49]">End Date</th>
            <th className="border-r-2 border-[#0e2d49]">Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="request-item border-b-2 border-[#0e2d49]">
            <td className="border-r-2 border-[#0e2d49]">E001</td>
            <td className="border-r-2 border-[#0e2d49]">John Doe</td>
            <td className="border-r-2 border-[#0e2d49]">Sick Leave</td>
            <td className="border-r-2 border-[#0e2d49]">2022-01-01</td>
            <td className="border-r-2 border-[#0e2d49]">2022-01-03</td>
            <td className="border-r-2 border-[#0e2d49]">Illness</td>
            <td>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Approve</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-4">Reject</button>
            </td>
          </tr>
          <tr className="request-item border-b-2 border-[#0e2d49]">
            <td className="border-r-2 border-[#0e2d49]">E002</td>
            <td className="border-r-2 border-[#0e2d49]">Jane Smith</td>
            <td className="border-r-2 border-[#0e2d49]">Vacation Leave</td>
            <td className="border-r-2 border-[#0e2d49]">2022-02-01</td>
            <td className="border-r-2 border-[#0e2d49]">2022-02-05</td>
            <td className="border-r-2 border-[#0e2d49]">Personal</td>
            <td>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Approve</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-4">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="leave-balance-list mt-10 w-screen flex flex-col items-center justify-center bg-[#f9fafb] rounded-lg shadow-md p-4">
      <h2 className="text-3xl font-bold mb-4 text-[#3b82f6]">Employee Leave Balance</h2>
      <div className="balance-list w-[80vw] flex flex-col items-center justify-center gap-4">
        <div className="balance-item bg-white border-2 border-[#0e2d49] rounded-md p-4">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-lg">John Doe</span>
            <span className="text-lg">Total Leave Balance: 120 days</span>
          </div>
        </div>
        <div className="balance-item bg-white border-2 border-[#0e2d49] rounded-md p-4">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-lg">Jane Smith</span>
            <span className="text-lg">Total Leave Balance: 120 days</span>
          </div>
        </div>
      </div>
    </div>
    <LeaveCalendar />
    </>
  )
}

export default Admin

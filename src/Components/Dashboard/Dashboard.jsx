import React from 'react'
import FetchUsers from './FetchUsers'
import AddUser from './AddUser'
import '../css/DashBoard.css'

export const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
        <div className="add-user-section">
            <h2>Add New User</h2>
            <AddUser />
        </div>
        <div className="fetch-users-section">
            <h2>Users List</h2>
            <FetchUsers />
        </div>
    </div>
    </>
  )
}

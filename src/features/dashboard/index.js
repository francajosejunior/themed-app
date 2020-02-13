import React from 'react'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {[...Array(100).keys()].map((x, i) => (
        <p key={i}>Dashboard</p>
      ))}
    </div>
  )
}

export default Dashboard

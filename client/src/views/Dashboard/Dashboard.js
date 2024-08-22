import React from "react";
import './Dashboard.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from './../../components/dynamicGreet/greetCard'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar/>
        <Sidebar/>
      {/* <aside className="sidebar">
        <div className="sidebar-header">
          <h2>School Dashboard</h2>
        </div>
        <ul className="sidebar-menu">
          <li>Home</li>
          <li>My Classes</li>
          <li>My Complaints</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </aside> */}

      <main className="main-content">
        <header className="header">
          <div className="header-title">
            <h1>Welcome to Your Dashboard</h1>
            <p>Your central hub for managing school activities</p>
          </div>
        </header>

        <section className="content">
          <div className="card">
            <h3>Total Complaints</h3>
            <p>12</p>
          </div>
          <div className="card">
            <h3>Resolved Complaints</h3>
            <p>8</p>
          </div>
          <div className="card">
            <h3>Pending Complaints</h3>
            <p>4</p>
          </div>
          <div className="card">
            <h3>Your Classes</h3>
            <p>3</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

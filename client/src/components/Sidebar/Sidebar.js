import React from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
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
  </div>
  );
};

export default Sidebar;

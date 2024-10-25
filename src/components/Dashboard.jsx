import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.email}</p>
      <Link to="/account-edit">Edit Account</Link>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;

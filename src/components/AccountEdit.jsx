import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AccountEdit = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} // Random background image
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Edit Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountEdit;

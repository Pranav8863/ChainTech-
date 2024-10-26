import { useState } from 'react'

import { Routes, Route} from 'react-router-dom'
import './App.css'

import Register from './components/Register'
import Login from './components/Login'
import AccountEdit from './components/AccountEdit'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <>
    
      <Routes>
       
        <Route path="/" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/editaccount' element={<AccountEdit />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard/Dashboard'
import Update from './Components/Dashboard/Update'




function App() {
  
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        {/* <Route path='/dashboard/update' element={<Update/>}></Route> */}
        <Route path="/dashboard/update/:id" element={<Update/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

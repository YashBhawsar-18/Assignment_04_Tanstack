import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard/Dashboard'




function App() {
  
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        {/* <Route path='/dashboard/update' element={<Update/>}></Route> */}
        {/* <Route path="/dashboard/update/:id" element={<Update id={id} />} /> */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App

import { useState } from 'react'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Contactus from './components/Contactus'
import './App.css'
import { BrowserRouter as ROuter, Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="heading">Heading</div>
      <div className="content">
        <Sidebar/>
        <Router>
          <Router path="/" element={<About/>}/>
          <Router path="/login" element={<Login/>}/>
          <Router path="/profile" element={<Profile/>}/>
          <Router path="/register" element={<Register/>}/>
          <Router path="/contactus" element={<Contactus/>}/>
        </Router>
      </div>
      <div class="footer"></div>
    
    </Router>
    </>
  )
}

export default App

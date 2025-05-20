import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
d          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

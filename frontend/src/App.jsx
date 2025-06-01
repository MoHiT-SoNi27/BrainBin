import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/noteState'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoteState>
        <div>
          <Router>
            <Navbar />
            <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
            </div>
          </Router>
        </div>
      </NoteState>
    </>
  )
}

export default App

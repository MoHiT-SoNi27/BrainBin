import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/noteState'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoteState>
        <div>
          <Router>
            <Navbar />
            <Alert message="This is Soni's property" />
            <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
            </Routes>
            </div>
          </Router>
        </div>
      </NoteState>
    </>
  )
}

export default App

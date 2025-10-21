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
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <div>
          <Router>
            <Navbar />
            <Alert alert={alert}/>
            <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert}/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/signup" element={<SignUp showAlert={showAlert}/>} />
            </Routes>
            </div>
          </Router>
        </div>
      </NoteState>
    </>
  )
}

export default App

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = '#042743'
      showAlert("Dark mode enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.background = 'white'
      showAlert("Light mode enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text" mode={mode}></Textform>} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

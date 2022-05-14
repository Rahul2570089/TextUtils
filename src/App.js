import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'

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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Textform heading="Enter the text"  mode={mode}></Textform>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [server, setServer] = useState('nothing')
  const handleClick = async () => {
    const response = await fetch('https://appt2.herokuapp.com/api')
      .then((res) => res.json())
      .then((res) => setServer(res[0].name))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Click Me</button>
        <p>{server}</p>
      </header>
    </div>
  )
}

export default App

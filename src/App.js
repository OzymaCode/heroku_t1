import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [server, setServer] = useState('nothing2')
  const handleClick = async () => {
    const response = await fetch('http://localhost:1234/api')
      .then((res) => res.json())
      .then((res) => setServer(res))
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

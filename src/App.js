import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstScreenComponent from './component/FirstScreenComponent'
import PrincipalComponent from './component/principalComponent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreenComponent />} />
        <Route path="/game" element={<PrincipalComponent />} />
      </Routes>
    </Router>
  )
}

export default App

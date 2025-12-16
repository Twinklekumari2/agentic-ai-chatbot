import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Chat from './pages/Chat'
import './App.css'
import HomePage from './pages/HomePage'
import Features from './pages/Features'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/about-us' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
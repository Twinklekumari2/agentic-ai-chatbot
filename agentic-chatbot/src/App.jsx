import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Chat from './pages/Chat'
import './App.css'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </div>
  )
}

export default App
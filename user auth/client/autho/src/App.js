import React from 'react'
import { Route, Routes } from 'react-router';
import { Home } from './pages';
import { Login, Signup } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;

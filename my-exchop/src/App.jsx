import React from 'react'
import {Welcome , Signin , Signup, Contact} from "../pages/index";
import {Dashboard,Profile,Cart} from '../components/index'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>    
            <Route path='/' element={<Welcome />} />
            <Route path='/contact' element={<Contact />}/>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default App
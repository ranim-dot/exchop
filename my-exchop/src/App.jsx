import React from 'react'
import {Welcome , Signin , Signup} from "../pages/index";
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>    
            <Route path='/' element={<Welcome />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />}/>
        </Routes>
    </div>
  )
}

export default App
import React from 'react'
import { Link } from "react-router-dom";
import '../index.css'
import { useState } from "react";
import {Signin,Signup} from '../index'






const Welcome = () => {

  function handleToggle() {
    setToggle(prev => !prev)
  }

  function handleEnter() {
    const element = document.getElementById('section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [toggle, setToggle] = useState(true)

  return (
    <>
      {/*Welcome Section Starts here  */}

      <div className='relative bg-gradient-to-br from-slate-600 to-slate-700 
       h-screen font-serif '>
        <div className="absolute animate-blob bg-gradient-to-br from-slate-600 to-slate-800  blur-sm w-60 h-60 rounded-full sm:left-[90px] cercle-left"></div>
        <div className="absolute animate-blob bg-gradient-to-br from-slate-600 to-slate-800  blur-sm w-40 h-40 rounded-full cercle-right"></div>
        <div className='flex justify-between'>
          <h4 className='lg:text-2xl pl-4 pt-3 sm:text-lg font-sans text-slate-300'>Exchop</h4>
          <Link to="/contact"><h4 className='md:text-lg pr-4 pt-4 sm:text-sm text-slate-300 font-serif font-semibold'>CONTACT US</h4></Link>
        </div>
        <h1 className=' drop-shadow-md tracking-in-expand-fwd-top text-slate-200 xl:text-8xl lg:text-7xl md:text-6xl text-center pt-32 sm:text-7xl'>
          Welcome
        </h1>
        <p className='md:ml-[33%] md:w-1/3  break-words  text-slate-300 drop-shadow-sm  text-center font-semibold pt-6 sm:text-truncate  lg:text-lg sm:text-md'>
          adipisicing elit. Eum repellendus a itaque ipsum, fuga, delectus facilis.
        </p>

        <div className='flex justify-center mt-16 '>
          <button type="submit" onClick={handleEnter} className='scale-in-center md:text-[18px] sm:text-[16px] 
          rounded-xl md:w-36 md:h-[50px] sm:w-32 sm:h-[45px] bg-slate-600 opacity-100
          text-slate-300 hover:bg-slate-700 transition duration-500 font-serif font-semibold'>
            Enter!
          </button>

        </div>
      </div>



      {/*Login Section Starts here */}

      <div className='flex justify-center items-center h-[100vh] bg-gradient-to-br from-slate-300 to-slate-400' id='section'>
        <div className='bg-slate-100 md:h-[400px] md:w-[750px] sm:h-[300px] sm:w-[350px] rounded-xl shadow-lg'>

          {toggle ? <Signin on={handleToggle} /> : <Signup on={handleToggle}/>}

        </div>
      </div>
    </>
  )
}

export default Welcome
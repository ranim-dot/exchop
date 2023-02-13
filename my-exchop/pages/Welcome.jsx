import React from 'react'
import { Link } from "react-router-dom";
import './index.css'

const Welcome = () => {
  return (
    <div className='relative bg-gradient-to-br from-slate-700 to-slate-800 
       h-screen font-serif overflow-hidden'>
      <div className="absolute animate-blob bg-gradient-to-br from-slate-700 to-slate-800  blur-sm w-60 h-60 rounded-full cercle-left"></div>
      <div className="absolute animate-blob bg-gradient-to-br from-slate-700 to-slate-800  blur-sm w-40 h-40 rounded-full cercle-right"></div>
      <div className='flex justify-between'>
        <h4 className='lg:text-2xl pl-4 pt-3 sm:text-lg font-sans text-slate-300'>Exchop</h4>
        <Link to="/contact"><h4 className='md:text-lg pr-4 pt-4 sm:text-sm text-slate-300 font-serif font-semibold'>CONTACT US</h4></Link>
      </div>
      <h1 className=' drop-shadow-md tracking-in-expand-fwd-top text-slate-900 xl:text-8xl lg:text-7xl md:text-6xl text-center pt-32 sm:text-6xl'>
        Welcome
      </h1>
      <p className='tracking-in-expand-fwd-top text-center pt-3 lg:text-lg sm:text-md'>
        Le Lorem Ipsum est simplement du faux texte.
      </p>

      <div className='flex justify-center mt-24 md:gap-40 sm:gap-20'>
        <button type="submit" className='scale-in-center md:text-[18px] sm:text-[16px] 
          rounded-xl md:w-36 md:h-[50px] sm:w-32 sm:h-[40px] bg-slate-600 opacity-100
          text-slate-300 hover:bg-slate-700 transition duration-500 font-serif font-semibold'>
          Sign Up
        </button>
        <button type="submit" className='scale-in-center md:text-[18px] sm:text-[16px] 
          rounded-xl md:w-36 md:h-[50px] sm:w-32 sm:h-[40px] bg-slate-600 opacity-100
          text-slate-300 hover:bg-slate-700 transition duration-500 font-serif font-semibold'>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Welcome
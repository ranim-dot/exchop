import React from 'react'
import {Link} from "react-router-dom";


const Welcome = () => {
  return (
    <div className='bg-[#A5978B] w-screen h-screen font-sans overflow-hidden'>
      <div class="absolute top-[10%] right-[50%] w-72 h-72 bg-[#ff9335] rounded-full 
      mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
      <div class="absolute top-[15%] right-[35%] w-72 h-72 bg-[#face1f] rounded-full 
      mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className='flex justify-between'>
        <h4 className='lg:text-2xl pl-4 pt-3 sm:tex-lg'>Exchop</h4>
        <Link to="/contact"><h4 className='md:text-xl pr-4 pt-3 sm:text-md'>CONTACT US</h4></Link>
      </div>
        <h1 className='xl:text-8xl lg:text-7xl md:text-6xl text-center pt-32 sm:text-6xl'>
          Welcome
          </h1>
          <p className='text-center pt-3 lg:text-lg sm:text-md'>
          Le Lorem Ipsum est simplement du faux texte.
          </p>
          
          <div className='flex justify-center mt-24 md:gap-40 sm:gap-20'>
          <button type="submit" className=' md:text-[18px] sm:text-[16px] rounded-xl md:w-36 md:h-[50px] sm:w-32 sm:h-[40px] bg-[#2B201E] text-[#A5978B] 
           hover:bg-[#483632] transition duration-300 font-serif font-medium'>
            Sign Up</button>
          <button type="submit" className=' md:text-[18px] sm:text-[16px] 
          rounded-xl md:w-36 md:h-[50px] sm:w-32 sm:h-[40px] bg-[#2B201E] 
          text-[#A5978B] hover:bg-[#483632] transition duration-300 font-serif font-medium'>
            Sign In
            </button>
          </div>
          <div className='fixed bottom-0 left-0 right-0 bg-[#2B201E] w-auto h-16'>
            <p className='text-[#e4e4e4] text-center font-serif pt-6 text-[12px]'>Copyright By Ranim - All Rights Reserved</p>
            <a href="https://github.com/ranim-dot"><img className='w-10 relative bottom-7 left-5' src="../assets/github.png" alt="github" /></a>
          </div>
    </div>
  )
}

export default Welcome
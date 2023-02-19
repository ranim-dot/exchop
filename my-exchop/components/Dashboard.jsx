import React from 'react'
import { NavBar, Product } from './index'

const Dashboard = () => {
  window.scrollTo(0,0);
  return (
    <div className='min-h-screen bg-slate-500'>
      <NavBar />

      {/* the head Card */}
      <div className='relative flex top-12 left-[15%] h-80 w-[70%] rounded-xl bg-slate-300 transition duration-300 opacity-95 hover:drop-shadow-lg'>
        <div className=' w-1/2 '>
          <div className='relative drop-shadow-md top-2 left-24 rounded-full h-72 w-72 bg-slate-400'>
            <img className='absolute opacity-90 -rotate-12 drop-shadow-md' src="./assets/chair.png" alt="" />
          </div>

        </div>
        <div className='w-1/2 '>
          <h1 className='top-10 relative text-5xl text-slate-800'>Welcome to Exchop</h1>
          <p className='relative text-left top-24 text-xl text-slate-800 font-serif'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elite.
            Ab, alias maxime nemo repellendus, similique quasi quas rerum velit.
          </p>
        </div>
      </div>

        {/* Showcasing the products */}
      <div className='flex flex-wrap justify-center items-center mt-32 gap-8 '>
        <Product />
        <Product  />
        <Product  />
        <Product  />
        <Product  />
        <Product />
        <Product />
        <Product  />
      </div>
    </div>
  )
}

export default Dashboard
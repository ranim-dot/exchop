import React from 'react'

const Signup = ({ on }) => {
  return (
    <div className=' flex w-full h-full'>

      {/* Card to switch toggle */}

      <div className='flex justify-center flex-col items-center gap-16  w-1/2 bg-slate-700 rounded-lg'>
        <h1 className='text-2xl text-white'>Welcome Back, friend</h1>
        <p className='text-white w-[250px] text-center'>Lorem, ipsum dolor sit amet consectetur adipisic elit.</p>
        <button onClick={on} className='text-white rounded-lg w-20 h-10 bg-slate-500 transition duration-300 hover:bg-slate-600' >Sign In</button>
      </div>




      {/* Login Form */}

      <form action="" className='flex font-serif flex-col items-center justify-center w-1/2'>
        <h1 className='font-serif uppercase text-slate-700 font-semibold text-xl pb-8'>Create Account</h1>
        <label  className='self-start font-serif pl-16 font-semibold text-slate-700' htmlFor="userName">UserName :</label>
        <input className='w-[250px] my-2 rounded-lg border-none bg-slate-300 hover:bg-slate-200 ' type="text" />
        <label className='self-start font-serif pl-16 font-semibold text-slate-700' htmlFor="email">Email :</label>
        <input className='w-[250px] my-2 rounded-lg border-none bg-slate-300 hover:bg-slate-200 ' type="email" name="email" id="email" />
        <label className='self-start font-serif pl-16 font-semibold text-slate-700' htmlFor="password">Password :</label>
        <input className='w-[250px] my-2 rounded-lg border-none bg-slate-300 hover:bg-slate-200 ' type="password" name="password" id="password" />
       
        <button type='submit' className='mt-4 font-semibold transition text-lg duration-200 text-slate-700  hover:bg-slate-300 rounded-xl h-10 w-24'>Sign up</button>
      </form>


      
    </div>
  )
}

export default Signup
import React from 'react'

const Signup = ({ on }) => {
  return (
    <div className=' flex w-full h-full'>

      {/* Card to switch toggle */}

      <div className='flex justify-center flex-col items-center gap-16  w-1/2 bg-slate-700 rounded-lg'>
        <h1 className='text-2xl text-white'>Welcome Back, friend</h1>
        <p className='text-white w-[250px] text-center'>Lorem, ipsum dolor sit amet consectetur adipisic elit.</p>
        <button onClick={on} className='text-white' >Sign In</button>
      </div>




      {/* Login Form */}

      <form action="" className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='font-serif text-4xl'>Create Account</h1>
        <label htmlFor="userName">UserName :</label>
        <input className='w-[250px] ' type="text" />
        <label htmlFor="email">Email :</label>
        <input className='w-[250px] ' type="email" name="email" id="email" />
        <label htmlFor="password">Password :</label>
        <input className='w-[250px] ' type="password" name="password" id="password" />
        <label htmlFor="confirm">Confirm Password :</label>
        <input className='w-[250px]' type="password" name="password" id="password" />
        <button type='submit'>Sign up</button>
      </form>


      
    </div>
  )
}

export default Signup
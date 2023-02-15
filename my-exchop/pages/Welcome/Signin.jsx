import React from 'react'

const Signin = ({ on }) => {



  return (
    <div className=' flex w-full h-full'>

      {/* Login Form */}

      <form action="" className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='font-serif text-4xl pb-8'>Sign in</h1>
        <label htmlFor="email">Email :</label>
        <input className='w-[250px] my-2' type="email" name="email" id="email" />
        <label htmlFor="password">Paswword :</label>
        <input className='w-[250px] my-2' type="password" name="password" id="password" />
        <a className='text-center ' href=""><p>Forget password ?</p></a>
        <button type='submit' className='pt-4'>Connect</button>
      </form>


      {/* Card to switch toggle */}

      <div className='flex justify-center flex-col items-center gap-16  w-1/2 bg-slate-700 rounded-lg'>
        <h1 className='text-2xl text-white'>Hello friend</h1>
        <p className='text-white w-[250px] text-center'>Lorem, ipsum dolor sit amet consectetur adipisic elit.</p>
        <button onClick={on} className='text-white' >Sign Up</button>
      </div>
    </div>
  )
}

export default Signin
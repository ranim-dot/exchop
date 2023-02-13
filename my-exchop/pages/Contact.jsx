import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const Contact = () => {
  const handleSubmit = (event) => {

  }
  return (
    <div className='relative bg-gradient-to-br from-slate-700 to-slate-800 
    h-screen font-serif overflow-hidden'>
      <Link to='/'><h1 className=''>Back</h1></Link>
      <div className="absolute animate-blob bg-gradient-to-br from-slate-700 to-slate-800  blur-sm w-60 h-60 rounded-full cercle-left"></div>
      <div className="absolute animate-blob bg-gradient-to-br from-slate-700 to-slate-800  blur-sm w-40 h-40 rounded-full cercle-right"></div>
      <div className='flex justify-center items-center h-full w-full'>
        <form action="" onSubmit={handleSubmit}
          className='flex w-1/2 h-1/2 backdrop-blur-sm  rounded-xl bg-slate-500/30 '>
          <img className='w-[60px] h-[60px] absolute top-8 left-16 opacity-50' src="../assets/mail.png" alt="email" />

          <h1 className='absolute top-20 left-40 text-2xl text-slate-300 font-bold'>Send Us A Message !!</h1>
          <input className='text-slate-900 h-12 mt-32 ml-40 rounded-lg bg-transparent w-1/2 focus:outline-slate-300'
            type="email"
            name=""
            id=""
            placeholder='Enter your Email...' />

          <textarea
            className='text-slate-900 resize-none h-1/3 w-1/2 rounded-lg  absolute top-48 left-40 bg-transparent'
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder='Enter your Message...'></textarea>
          <button className='scale-in-center 
          hover:bg-slate-900 transition duration-500 absolute bg-slate-800 h-12 w-32 right-20 bottom-12 rounded-lg text-slate-300 font-bold' type="submit">Send</button>

        </form>
      </div>

    </div>
  )
}

export default Contact;
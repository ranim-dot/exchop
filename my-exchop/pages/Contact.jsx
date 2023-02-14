import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bj3vrsd', 
    'template_6l5348g', 
    form.current,
     'o7h_kz5DP13ttg2ZT')
      .then((result) => {
          console.log(result.text);
          console.log('message Sent')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='relative bg-gradient-to-br from-slate-600 to-slate-800 
    h-screen font-serif overflow-hidden'>
      <Link to='/'><h1 className='text-slate-300 font-semibold absolute sm:top-4 sm:left-4 underline underline-offset-[3px] md:text-lg md:top-4'>Back</h1></Link>

      {/*Background Design starts here */}
      <div className="absolute animate-blob bg-gradient-to-br from-slate-700 to-slate-800  blur-sm w-60 h-60 rounded-full cercle-left"></div>
      <div className="absolute animate-blob bg-gradient-to-br from-slate-700 to-slate-800  blur-sm w-40 h-40 rounded-full cercle-right"></div>
      <div className='flex justify-center items-center h-full w-full'>


        {/*Form shit starts here*/}
        <form ref={form} onSubmit={sendEmail}
          className='hover:shadow-xl hover:shadow-slate-800/30 transition duration-500 md:w-1/2 md:h-1/2 sm:w-[450px] sm:h-[300px] backdrop-blur-sm  rounded-xl bg-slate-500/30 '>
          <img className=' w-[60px] h-[60px] absolute md:top-8 md:left-16 sm:top-6 sm:left-4 opacity-50' src="../assets/mail.png" alt="email" />

          <h1 className='absolute md:top-20 md:left-40 sm:top-20 sm:left-20 md:text-2xl sm:text-xl text-slate-300 font-bold'>Send Us A Message !!</h1>
          <input className='absolute outline-none text-slate-900 h-12 md:top-32 md:left-40 sm:top-28 sm:left-20 rounded-lg bg-transparent w-1/2'
            type="email"
            name="user_email"
            id="email"
            placeholder='Enter your Email...' />

          <textarea
            className='text-slate-900 resize-none h-1/3 w-1/2 rounded-lg  absolute md:top-48 md:left-40 sm:top-44 sm:left-20  bg-transparent'
            name="message"
            id="message"
            cols="30"
            rows="2"
            placeholder='Enter your Message...'></textarea>
          <button className='scale-in-center 
          hover:bg-slate-900 transition duration-500 absolute bg-slate-800 h-12 md:w-32 sm:w-24 md:right-20 md:bottom-12 sm:right-2 sm:bottom-6  rounded-lg text-slate-300 font-bold' type="submit">Send</button>

        </form>
      </div>

    </div>
  )
}

export default Contact;
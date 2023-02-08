import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const handleSubmit = (event) =>{
        
    }
  return (
    
    <div className='flex justify-center items-center bg-[#2B201E] w-screen h-screen '>
      <div className='flex justify-center w-[25%] group'>
        <div className='absolute bg-gradient-to-r from-[#7a4f35] to-[#91442d] md:w-[25%] md:h-[55%] sm:w-[75%] 
        sm:h-[50%] rounded-lg blur opacity-75 group-hover:opacity-100 transition
        duration-1000 group-hover:duration-200'></div>
            <form onSubmit={handleSubmit} className=" flex relative justify-center  
        bg-[#9d746d] md:w-full md:h-[390px] sm:w-[75%] sm:h-[331px] 
         rounded-lg  flex-col gap-2">
                <Link to='/'><h1 className='ml-2  underline'>Back</h1></Link>
                <h1 className='pb-2 text-xl text-center text-[#332522] underline '>CONTACT US</h1>
                <label htmlFor="email" className=' text-md  ml-6 text-[#332522]'>Email : </label>
                <input type="email" name="email" id="email"  className='focus:ring-stone-800
                 rounded-lg bg-[#5d4945]  text-[14px] text-zinc-800 border-none
                 outline-none font-serif placeholder:text-center w-[75%] ml-5 '/>
                <label htmlFor="message" className='text-md ml-6 my-2 text-[#332522]'>Write Your Message :</label>
                <textarea name="message" id="message" cols="20" rows="3" className=' font-serif text-thin
                  mx-5 w-[87%] rounded-lg border-none bg-[#5d4945] 
                  focus:border-none focus:ring-stone-800 text-zinc-800
                '></textarea>
                <button type='submit' className='mt-3 bg-[#2B201E] w-[50%] mx-24 h-10 rounded-lg text-[#9d746d]
                 hover:bg-[#473532] transition duration-1000'>SEND !</button>
            </form>
      </div>
    </div>
  )
}

export default Contact;
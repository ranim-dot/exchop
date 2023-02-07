import React from 'react'

const Contact = () => {
    const handleSubmit = (event) =>{
        
    }
  return (
    <div className='flex justify-center items-center bg-[#463431] w-screen h-screen'>
        <div class="absolute top-[10%] right-[50%] w-72 h-72 bg-[#fe9393] rounded-full 
      mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
      <div class="absolute top-[15%] right-[35%] w-72 h-72 bg-[#ffe680] rounded-full 
      mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className='flex justify-center items-center bg-[#9d746d] md:w-[30%] md:h-[55%] sm:w-[75%] sm:h-[50%] rounded-lg opacity-50 '>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-10">
                <label htmlFor="email" className='text-center font-serif font-bold'>Write Your Email@</label>
                <input type="email" name="email" id="email" placeholder='------@-----.---' className='
                md:h-[35px] md:w-[260px] sm:w-[200px] sm:h-[30px] rounded-lg bg-[#5d4945] pl-4 text-[14px] text-white  border-none outline-none font-serif placeholder:text-center placeholder:opacity-50
                placeholder:text-sm placeholder:text-white '/>
                <button type='submit'>Send!</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;
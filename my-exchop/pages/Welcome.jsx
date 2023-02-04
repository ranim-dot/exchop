import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-[#A5978B] w-screen h-screen font-sans overflow-hidden'>
      <div className='flex justify-between'>
        <h4 className='lg:text-2xl pl-4 pt-3 sm:tex-lg'>Exchop</h4>
        <h4 className='md:text-xl pr-4 pt-3 sm:text-md'>CONTACT US</h4>
      </div>
        <h1 className='xl:text-8xl lg:text-7xl md:text-6xl text-center pt-32 sm:text-6xl'>
          Welcome
          </h1>
          <p className='text-center pt-3 lg:text-lg sm:text-md'>
          Le Lorem Ipsum est simplement du faux texte.
          </p>

          <img
          className='relative left-[77%] bottom-[15%] blur-[2px] ' 
          src="../assets/chair.png" alt="chair" />

          <div className='fixed bottom-0 left-0 right-0 bg-[#2B201E] w-auto h-16'>
            gfd
          </div>
    </div>
  )
}

export default Welcome
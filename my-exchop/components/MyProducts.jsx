import React from 'react'
import { NavBar, Product } from './index'

const MyProducts = () => {
    return (
        <div className='min-h-screen bg-slate-400'>
            <NavBar />
            <div className='flex flex-wrap  justify-start mt-5 ml-5 gap-8 '>
                <Product />
                <Product />
                
                
            </div>
        </div>
    )
}

export default MyProducts
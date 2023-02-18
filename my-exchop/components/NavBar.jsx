import React, {useState} from 'react'
import { Cart, Profile, Searchbar } from './index'
import { Link } from "react-router-dom";

const NavBar = () => {



    return (
        < div className='flex justify-between items-center h-16 bg-slate-600 px-3'>
            <h1 className='text-lg text-slate-300 cursor-default'>Exchop</h1>
            <ul className='flex gap-16'>
                <li className='text-md font-semibold font-serif text-slate-300 cursor-pointer'>My products</li>
                <li className='text-md font-semibold font-serif text-slate-300 cursor-pointer'>Contact us</li>
            </ul>
            <div className='flex gap-8 items-center justify-center '>
            <Searchbar  />
            <Cart />
            <Profile />
            </div>
            
        </div>
    )
}

export default NavBar;
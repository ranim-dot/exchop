import React, {useState} from 'react'
import { Exchange, Profile, Searchbar } from './index'
import { Link } from "react-router-dom";

const NavBar = () => {



    return (
        < div className='flex justify-between items-center h-16 bg-slate-600 px-3'>
            <Link to="/dashboard"><h1 className='text-lg cursor-pointer text-slate-200'>Exchop</h1></Link>
            <ul className='flex gap-16'>
                <Link to='/myProducts'><li className='text-md font-semibold font-serif text-slate-200 cursor-pointer'>My products</li></Link>
                <li className='text-md font-semibold font-serif text-slate-200 cursor-pointer'>Contact us</li>
            </ul>
            <div className='flex gap-8 items-center justify-center '>
            <Searchbar  />
            <Exchange />
            <Profile />
            </div>
            
        </div>
    )
}

export default NavBar;
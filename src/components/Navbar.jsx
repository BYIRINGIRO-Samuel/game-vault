import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex flex-row relative'>
            <header>
                <img src="/assets/images/joystick.png" alt="" className='size-12 absolute left-7 top-2' />
                <p className='absolute left-20 top-4 text-2xl text-blue-800 shadow-[0_0_20px_rgba(59,130,246,0.9)]'>
                    GameVault
                </p>
                <nav className="flex gap-2"> 
                    <Link to="/" className="cursor-pointer text-amber-700">Home</Link>
                    <Link to="/games" className='cursor-pointer'>Games</Link>
                    <Link to="/blog" className='cursor-pointer'>Blog</Link>
                    <Link to="/community" className='cursor-pointer'>Community</Link>
                    <Link to="/movies" className='cursor-pointer'>Movies</Link>
                </nav>
            </header>
            <button className="text-black bg-pink-600 w-28 rounded-3xl cursor-pointer hover:text-[#eee] hover:bg-[#f1683a] absolute top-3.5 right-4 h-8">
                login
            </button>
        </div>
    );
};

export default Navbar;

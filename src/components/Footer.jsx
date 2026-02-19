import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex flex-col bg-gray-950 items-center justify-center'>
            <div className="flex flex-row items-center gap-2">
                <img src="/assets/images/joystick.png" alt="" className='size-12' />
                <p className="font-bold text-blue-700">GameVault</p>
            </div><br />
            <div className="flex flex-row gap-3 sm:gap-5 md:gap-9">
                <Link to="/" className='cursor-pointer'>Home</Link>
                <Link to="/games" className='cursor-pointer'>Games</Link>
                <Link to="/blog" className='cursor-pointer'>Blog</Link>
                <Link to="/community" className='cursor-pointer'>Community</Link>
                <Link to="/movies" className='cursor-pointer'>Movies</Link>
            </div><br />
            <div className="flex flex-row gap-3 sm:gap-5 md:gap-9">
                <a href="https://www.instagram.com/byiringirosamuel74/"><img src="/assets/images/instagram.png" alt="" className='size-10 cursor-pointer' /></a>
                <a href="https://www.linkedin.com/feed/"><img src="/assets/images/linkedin.png" alt="" className='size-10 cursor-pointer' /></a>
                <a href="https://www.facebook.com/"><img src="/assets/images/social.png" alt="" className='size-10 cursor-pointer' /></a>
                <a href="https://x.com/home"><img src="/assets/images/twitter.png" alt="" className='size-10 cursor-pointer' /></a>
            </div><br />
        </div>
    )
}

export default Footer

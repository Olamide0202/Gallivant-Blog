import Gallivant from '../assets/logo/Gallivant.png'
import Background from "../assets/logo/Background.png"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { useState } from 'react'


export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative min-h-[80vh] bg-cover bg-center bg-fixed' style={{ backgroundImage: `url(${Background})` }}>
      {/* Updated overlay with reduced opacity and gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-black/30'></div>

      {/* Main content container */}
      <div className='container mx-auto px-4 py-6 relative z-10'>
        {/* Add hamburger menu button */}
        <button 
          className='md:hidden fixed right-4 top-4 z-50 text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Updated grid with animation */}
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4 animate-fadeIn'>
          {/* Logo with hover effect */}
          <div className='scale-75 md:scale-50 text-center md:text-left transition-transform hover:scale-[0.85] md:hover:scale-[0.55]'>
            <img src={Gallivant} alt='Gallivant Logo' className='h-12 mx-auto md:mx-0' />
          </div>

          {/* Search bar with animation */}
          <div className='justify-self-center w-full md:w-auto'>
            <div className='relative transform transition-all hover:scale-105'>
              <input 
                type="text" 
                placeholder='Search your option' 
                className='rounded-full py-2 px-6 w-full md:w-[300px] focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all' 
              />
              <span className='absolute right-4 top-1/2 transform -translate-y-1/2 hover:rotate-90 transition-transform cursor-pointer'>
                🔍
              </span>
            </div>
          </div>

          {/* Social Media Icons with hover animations */}
          <div className='flex space-x-4 pt-4 justify-center md:justify-end'>
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><FaFacebook size={24} /></a>
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><FaTwitter size={24} /></a>
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><AiFillInstagram size={24} /></a>
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><FaYoutube size={24} /></a>
          </div>
        </div>

        {/* Modified navigation */}
        <nav className={`
          fixed md:relative top-0 left-0 w-full h-full md:h-auto
          bg-black md:bg-transparent
          transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          transition-transform duration-300 ease-in-out
          z-40 md:z-auto
        `}>
          <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 md:gap-10 py-8 justify-center text-white pt-20 md:pt-8'>
            <li className='cursor-pointer hover:text-yellow-500'>Home</li>
            <li className='cursor-pointer hover:text-yellow-500'>About Us</li>
            <li className='cursor-pointer hover:text-yellow-500'>Category</li>
            <li className='cursor-pointer hover:text-yellow-500'>Blog</li>
            <li className='cursor-pointer hover:text-yellow-500'>Contact Us</li>
          </ul>
        </nav>

        {/* Updated Hero content with animations */}
        <div className='text-center mt-16 md:mt-32 max-w-3xl mx-auto px-4 animate-slideUp'>
          <h1 className='font-bold text-4xl md:text-6xl text-white leading-tight hover:scale-105 transition-transform'>
            Where will you go next?
          </h1>
          <p className='text-white mt-4 md:mt-6 text-base md:text-lg opacity-90 hover:opacity-100 transition-opacity'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra. Sit justo velit, eu sed sollicitudin tempus, risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla accumsan id urna, ullamcorper gravida varius.
          </p>
          <h2 className='text-yellow-500 mt-6 md:mt-8 text-3xl md:text-5xl font-extrabold animate-pulse hover:text-yellow-400 transition-colors'>
            Let's Go.....
          </h2>
        </div>
      </div>
    </div>
  )
}
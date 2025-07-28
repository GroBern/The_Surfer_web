import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-3 sm:py-4 px-3 sm:px-6 md:px-8 lg:px-16 bg-transparent'>
        <img src={assets.logo} alt="The Surfer Logo" className="h-8 sm:h-10 md:h-12 w-auto"/>
        
        <ul className='hidden md:flex gap-4 lg:gap-7 text-white text-sm lg:text-base'>
          <a href="#Header" className='cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'>DESTINATION</a>
          <a href="#Header" className='cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'>ACTIVITIES</a>
          <a href="#Header" className='cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'>FAQ</a>
          <a href="#Header" className='cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'>BLOGS</a>
          <a href="#Header" className='cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'>CONTACT</a>
        </ul>
        
        <button 
          className={`md:hidden text-white text-2xl transition-all duration-300 hover:text-cyan-300 ${isMenuOpen ? 'rotate-90 text-cyan-300' : 'rotate-0'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <button className='hidden md:block px-4 lg:px-8 py-2 text-sm lg:text-base rounded-full border border-white text-white transition-all duration-300 hover:bg-white-300 hover:text-white hover:scale-105 hover:shadow-lg transform'>
          BOOK NOW
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
<div className='bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-72 mx-auto rounded-3xl mt-0 transform transition-all duration-500 ease-in-out'>   
 <div className='px-4 py-6'>
      <ul className='flex flex-col gap-3 text-white text-center'>
        <a 
          href="#Header" 
          className='py-3 px-4 cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20 rounded-xl text-sm font-medium'
          onClick={() => setIsMenuOpen(false)}
        >
          DESTINATION
        </a>
        <a 
          href="#Header" 
          className='py-3 px-4 cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20 rounded-xl text-sm font-medium'
          onClick={() => setIsMenuOpen(false)}
        >
          ACTIVITIES
        </a>
        <a 
          href="#Header" 
          className='py-3 px-4 cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20 rounded-xl text-sm font-medium'
          onClick={() => setIsMenuOpen(false)}
        >
          FAQ
        </a>
        <a 
          href="#Header" 
          className='py-3 px-4 cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20 rounded-xl text-sm font-medium'
          onClick={() => setIsMenuOpen(false)}
        >
          BLOGS
        </a>
        <a 
          href="#Header" 
          className='py-3 px-4 cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:transform hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20 rounded-xl text-sm font-medium'
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </a>
        <button 
          className='mt-2 mx-auto px-6 py-3 rounded-full border border-white/50 text-white transition-all duration-300 hover:bg-white-300 hover:text-white hover:scale-105 hover:shadow-lg transform text-sm font-semibold'
          onClick={() => setIsMenuOpen(false)}
        >
          BOOK NOW
        </button>
      </ul>
    </div>
  </div>
</div>

      {/* Horizontal line - only shows when mobile menu is closed */}
      {!isMenuOpen && (
        <div className='container mx-auto px-3 sm:px-6 md:px-8 lg:px-16'>
          <div className='w-full h-0.5 bg-white/80'></div>
        </div>
      )}
    </div>
  )
}

export default Navbar
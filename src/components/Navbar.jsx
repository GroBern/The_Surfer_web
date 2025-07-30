import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className='container mx-auto flex justify-between items-center py-3 sm:py-4 px-3 sm:px-6 md:px-8 lg:px-16'>
        <img 
          src={assets.logo} 
          alt="The Surfer Logo" 
          className={`h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 ${
            isScrolled ? 'brightness-100' : 'brightness-100'
          }`}
        />
        
        <ul className='hidden md:flex gap-4 lg:gap-7 text-sm lg:text-base'>
          <a href="#Header" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${
            isScrolled 
              ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]' 
              : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
          }`}>DESTINATION</a>
          <a href="#Header" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${
            isScrolled 
              ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]' 
              : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
          }`}>ACTIVITIES</a>
          <a href="#Header" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${
            isScrolled 
              ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]' 
              : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
          }`}>FAQ</a>
          <a href="#Header" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${
            isScrolled 
              ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]' 
              : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
          }`}>BLOGS</a>
          <a href="#Header" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${
            isScrolled 
              ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]' 
              : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
          }`}>CONTACT</a>
        </ul>
        
        <button 
          className={`md:hidden text-2xl transition-all duration-300 ${
            isMenuOpen ? 'rotate-90' : 'rotate-0'
          } ${
            isScrolled 
              ? 'text-gray-800 hover:text-cyan-600' 
              : 'text-white hover:text-cyan-300'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <a href='https://main.d7z80586kqd0r.amplifyapp.com/' target='_blank' className={`hidden md:block px-4 lg:px-8 py-2 text-sm lg:text-base rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
          isScrolled 
            ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' 
            : 'border-white text-white hover:bg-white hover:text-gray-800'
        }`}>
          BOOK NOW
        </a>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`w-72 mx-auto rounded-3xl mt-0 transform transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl' 
            : 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl'
        }`}>   
          <div className='px-4 py-6'>
            <ul className='flex flex-col gap-3 text-center'>
              <a 
                href="#Header" 
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100' 
                    : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                DESTINATION
              </a>
              <a 
                href="#Header" 
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100' 
                    : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ACTIVITIES
              </a>
              <a 
                href="#Header" 
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100' 
                    : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#Header" 
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100' 
                    : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                BLOGS
              </a>
              <a 
                href="#Header" 
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100' 
                    : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
              <button 
                className={`mt-2 mx-auto px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm font-semibold ${
                  isScrolled 
                    ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' 
                    : 'border-white/50 text-white hover:bg-white hover:text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK NOW
              </button>
            </ul>
          </div>
        </div>
      </div>

      {!isMenuOpen && !isScrolled && (
        <div className='container mx-auto px-3 sm:px-6 md:px-8 lg:px-16'>
          <div className='w-full h-0.5 bg-white/80'></div>
        </div>
      )}
    </div>
  )
}

export default Navbar
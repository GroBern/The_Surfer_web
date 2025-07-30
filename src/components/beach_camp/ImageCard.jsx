import React from 'react'
import { motion as Motion } from 'framer-motion'

const ImageCard = () => {
  return (
    <Motion.div 
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-8 px-4'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Motion.div 
        className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl items-start'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Motion.div 
          className='relative overflow-hidden shadow-md'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <img 
            src="/beach_camp/I1.jpg" 
            alt="Beach Camp Rooftop"
            className='w-full h-48 md:h-60 object-cover'
          />
        </Motion.div>

        <Motion.div 
          className='relative overflow-hidden shadow-md'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <img 
            src="/beach_camp/I2.jpg" 
            alt="Pool Area"
            className='w-full h-48 md:h-60 object-cover'
          />
        </Motion.div>

        <Motion.div 
          className='flex flex-col space-y-4'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Motion.div 
            className='relative overflow-hidden shadow-md'
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img 
              src="/beach_camp/I3.jpg" 
              alt="Beach Camp Building"
              className='w-full h-48 md:h-60 object-cover'
            />
          </Motion.div>
          
          <Motion.p 
            className='text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 px-2 text-justify'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.35 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            diam nonummy nibh euismod tincidunt ut laoreet dolore 
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
            ut aliquip ex ea commodo consequat.
          </Motion.p>
        </Motion.div>
      </Motion.div>
    </Motion.div>
  )
}

export default ImageCard

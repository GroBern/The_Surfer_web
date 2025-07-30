import React from 'react'
import { motion } from 'framer-motion'

const SurfingJourney = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center container mx-auto p-6 sm:p-8 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Your Ultimate Surfing Journey
      </motion.h1>
      
      <motion.p 
        className='text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-8xl text-neutral-400 px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        We offer more than just surf lessons: we provide an immersive experience that connects you with the ocean, the surf community, and nature. Whether you're a beginner or an experienced surfer, our expert coaches will guide you through personalized sessions tailored to your skill level.
      </motion.p>
      
      <motion.p 
        className='text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-6xl text-neutral-400 mt-4 px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Located in some of the world's best surf destinations, our camps in Sri Lanka and Morocco are designed to offer you the perfect combination of adventure, relaxation, and growth. From stunning beaches to world-class waves, every element of the Surfer Camp is crafted to elevate your surfing journey. Join us to ride the waves, make lasting memories, and become part of a global surfing community.
      </motion.p>
    </motion.div>
  )
}

export default SurfingJourney
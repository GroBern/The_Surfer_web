import React from 'react'
import { motion as Motion } from 'framer-motion'

const LifeAtSurfCamp = () => {
  return (
    <Motion.div 
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-1.5' 
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Motion.h1 
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Life At The Surfer Beach Camp
      </Motion.h1>
      
      <Motion.p 
        className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-5xl text-neutral-400 px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        The Surfer Beach surf camp in Sri Lanka offers a perfect beach holiday with tropical palms overhead and waves
        breaking just meters away! <br/>
        Our beach surf camp is located right in front of widely known Weligama surfing beach, famous for its warm water and
        vast array of wave types. As well as within ten minutes ride you can get to the best surf spots Sri Lanka has to offer:
        Fisherman's surf break, Midigama, Ahangama and Mirissa surf spots and more. <br/>
        The rooms on offer are perfect for singles. couples, groups or families. They are very spacious With enough room for
        all the gear you might bring along for your holiday. The Surfer beach camp holds twelve fully air conditioned rooms
        available including dormitory. Every room has it's own private balcony and bathroom. <br/>
        The Surfer beach camp has a swimming pool, where you can freshen up and enjoy a beer after a tiring surf session.
        On top Of that our rooftop restaurant and chilling area offers lots Of good food and social events to keep our guests
        relaxed and entertained between surfs. <br/>
        Wake up to the sound of waves breaking just meters away in our surf camp in Sri Lanka and help us
        turn your surf holiday into unforgettable experience.     
      </Motion.p>
    </Motion.div>
  )
}

export default LifeAtSurfCamp;
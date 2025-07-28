import React from 'react'
import { motion } from 'framer-motion'

const SurfingJourney = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center container mx-auto p-6 sm:p-8 md:p-14 md:px-20 lg:px-16 w-full overflow-hidden' 
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h1 
        className='text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Difference between Beach Camp And Ts2 Camp
      </motion.h1>
      
      <motion.p 
        className='text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-8xl text-black px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Main difference is the location and the room Standard !<br />
        Beach camp located right next to the beach With swim pool, TS2 camp rooms are With Basic standard simple private rooms With Fan and
        hot water ensuite bathroom Beach camp rooms are Standard private rooms with air conditioning, ensuite bathroom and hot water ! TS2
        camp located 05 minutes ride away from the beach camp, even though you book TS2 weligama , all your surf lessons, Yoga, dinner and all
        events Will be taken place at the beach camp ! 1000 rupees per day will be paid per room and per dormitory as a transport compensation
        to travel between the camps! You can basically spend all ur day at the beach camp and just go for sleep at TS2 camp !      
        </motion.p>

        <button className='hidden md:block px-4 lg:px-8 mt-4 py-2 text-sm lg:text-base rounded-full border border-black text-black transition-all duration-300 hover:bg-black-300 hover:text-black hover:scale-105 hover:shadow-lg transform'>
          BOOK NOW
        </button>
    </motion.div>
  )
}

export default SurfingJourney
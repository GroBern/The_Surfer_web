import React from 'react'
import { motion } from 'framer-motion'

const SurfingJourney = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-1.5' 
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h1 
        className='text-sm sm:text-base md:text-lg lg:text-base font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Difference between Beach Camp And Ts2 Camp
      </motion.h1>
      
      <motion.p 
        className='text-[8px] sm:text-[10px] md:text-xs leading-tight text-center max-w-2xl text-black px-1'
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

        <div className='flex justify-center w-full'>
          <button className='px-1.5 lg:px-2 mt-1 py-0.5 text-[8px] lg:text-[10px] rounded-full border border-black text-black transition-all duration-300 hover:bg-black-200 hover:text-black hover:scale-102 hover:shadow-lg transform'>
            BOOK NOW
          </button>
        </div>
    </motion.div>
  )
}

export default SurfingJourney
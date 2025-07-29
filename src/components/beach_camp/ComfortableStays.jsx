import React from 'react'
import { motion as Motion } from 'framer-motion'

const ComfortableStays = () => {
  const staysData = [
    {
      id: 1,
      image: "/beach_camp/I1.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam"
    },
    {
      id: 2,
      image: "/beach_camp/I2.JPEG",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam"
    },
    {
      id: 3,
      image: "/beach_camp/I3.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam"
    },
    {
      id: 4,
      image: "/beach_camp/bg.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam"
    }
  ]

  return (
    <Motion.div 
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-16 px-4'
      id='ComfortableStays'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <Motion.h1 
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-8 font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Comfortable Stays For Every Surfer
      </Motion.h1>

      <div className='w-full max-w-6xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {staysData.map((item, index) => (
            <Motion.div
              key={item.id}
              className='flex flex-col overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Motion.div 
                className='w-full'
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              >
                <img 
                  src={item.image}
                  alt={`Comfortable stay ${item.id}`}
                  className='w-full h-48 sm:h-52 lg:h-56 object-cover'
                />
              </Motion.div>

              <Motion.div 
                className='p-4'
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                  {item.text}
                </p>
              </Motion.div>
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.div>
  )
}

export default ComfortableStays

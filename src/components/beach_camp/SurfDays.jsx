import React from 'react'
import { motion as Motion } from 'framer-motion'

const SurfDays = () => {
  const surfDaysData = [
    {
      id: 1,
      image: "/beach_camp/I1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in",
      imagePosition: "left"
    },
    {
      id: 2,
      image: "/beach_camp/I2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in",
      imagePosition: "right"
    },
    {
      id: 3,
      image: "/beach_camp/I3.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in",
      imagePosition: "left"
    },
    {
      id: 4,
      image: "/beach_camp/bg.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in",
      imagePosition: "right"
    }
  ]

  return (
    <Motion.div 
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-16 px-4'
      id='SurfDays'
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
        What Your Surf Days Look Like
      </Motion.h1>

      <div className='w-full max-w-7xl space-y-12'>
        {surfDaysData.map((item, index) => (
          <Motion.div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
              item.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Motion.div 
              className='lg:w-1/3 w-full max-w-xs'
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img 
                src={item.image}
                alt={`Surf day ${item.id}`}
                className='w-full h-40 lg:h-48 object-cover shadow-md'
              />
            </Motion.div>

            <Motion.div 
              className='lg:w-2/3 w-full flex items-center'
              initial={{ opacity: 0, x: item.imagePosition === 'left' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
                {item.text}
              </p>
            </Motion.div>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  )
}

export default SurfDays

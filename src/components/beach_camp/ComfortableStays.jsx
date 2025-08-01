import React from 'react'
import { motion as Motion } from 'framer-motion'

const ComfortableStays = () => {

  return (
    <Motion.div
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-16 mb-16 px-4'
      id='ComfortableStays'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Motion.h1
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-8 font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Comfortable Stays For Every Surfer
      </Motion.h1>

      <Motion.p
        className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-center max-w-5xl px-1 mb-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        From budget-friendly shared dorms to deluxe private rooms, we offer spaces designed with simplicity, cleanliness, and island vibes in mind. Every room includes A/C, free Wi-Fi, daily cleaning, and quality bedding—because your surf experience deserves good rest too.
      </Motion.p>

      <div className='w-full max-w-8xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <img
                src="/beach_camp/room_1.jpg"
                alt="Comfortable stay"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Shared Dorm Rooms</strong> – Great for solo travelers who love meeting people.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <img
                src="/beach_camp/room_2.jpg"
                alt="Comfortable stay"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Private Double Rooms</strong> – For couples or solo guests who want privacy with style.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <img
                src="/beach_camp/room_3.jpg"
                alt="Comfortable stay"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Deluxe Pool View Rooms</strong> – Spacious, modern, and just a few steps from the pool.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <img
                src="/beach_camp/room_4.jpg"
                alt="Comfortable stay"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Female-Only Dorms</strong> – Safe and comfortable for solo female adventurers.
              </p>
            </Motion.div>
          </Motion.div>
        </div>

      </div>
    </Motion.div>
  )
}

export default ComfortableStays

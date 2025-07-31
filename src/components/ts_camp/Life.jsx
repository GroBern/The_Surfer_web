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
      viewport={{ once: true, amount: 0.3 }}
    >
      <Motion.h1
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Life at TS2 Surf Camp
      </Motion.h1>

      <Motion.p
        className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-5xl text-neutral-400 px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        TS2 Surf Camp is a relaxed and friendly space for travelers who want the surf camp experience without the party scene. Located just a 3-minute walk
        from the beach, TS2 is perfect for solo surfers, digital nomads, or couples looking for comfort, good vibes, and great surf.
        <br />  <br />
        You’ll experience the same top-rated coaching and hospitality we’re known for, but in a quieter environment.
        Small-group lessons, chill hangout areas, optional yoga, and daily surf theory sessions make this camp a
        favorite for anyone looking to grow their surf skills and enjoy a balanced island lifestyle.
        <br />  <br />
        Our guests often say TS2 feels like a second home—and that’s exactly how we designed it.
        <br />

      </Motion.p>
    </Motion.div>
  )
}

export default LifeAtSurfCamp;
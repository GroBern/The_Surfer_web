import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import LifeAtSurfCamp from '../components/beach_camp/Life'
import ImageCard from '../components/beach_camp/ImageCard'
import Packages from '../components/beach_camp/Packages'
import SurfDays from '../components/beach_camp/SurfDays'
import ComfortableStays from '../components/beach_camp/ComfortableStays'
import ImageSlider from '../components/beach_camp/ImageSlider'
import { Footer } from '../components/Footer'


const BeachCamp = () => {
  return (
    <div>
      <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
        style={{ backgroundImage: "url('/surf.jpg')" }} id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
          <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
            Your Ultimate Surf Camp Experience In Weligama
          </h2>
        </div>
      </div>

      <LifeAtSurfCamp />
      <ImageCard />
      <Packages />
      <SurfDays />
      <ComfortableStays />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default BeachCamp
import React from 'react'
import Header from '../components/beach_camp/Header'
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
      <Header />
      <LifeAtSurfCamp />
      <ImageCard />
      <Packages />
      <ComfortableStays />
      <SurfDays />
      {/* <ImageSlider /> */}
      <Footer />
    </div>
  )
}

export default BeachCamp
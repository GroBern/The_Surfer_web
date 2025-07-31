import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SurfingJourney from "../components/SurfingJourney";
import SurfCampCard from "../components/SurfCard";
import ChooseSurfCamp from "../components/ChooseSurf";
import ImageCard from "../components/ImageCard";
import SurfurWay from "../components/SurfurWay";
import SurfPackageCard from "../components/Packages";
import Difference from "../components/Difference";
import Activities from "../components/Activities";
import MasonryGrid from "../components/Follow";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Blogs from "../components/Blogs";
import { Footer } from "../components/Footer";
import { FooterStats } from "../components/Footer";
import { link } from "framer-motion/client";
import Navbar from "../components/Navbar";


const Home = () => {
  const cards = {
    card1: {
      pic: "surfcard1.jpg",
      topic: "The Surfer Beach Surf Camp",
      body1:
        "Join us at the ultimate destination for surf enthusiasts. Experience the thrill of riding the waves and enjoy the serene beauty of the ocean.",
      link: "/beach-camp",
    },

    card2: {
      pic: "surfcard2.jpg",
      topic: "TS2 Surf Camp",
      body1:
        "Feel the magic of surfing as the sun sets over the horizon. Our guided sunset sessions are a perfect way to end your beach day.",
      link: "/ts2-camp",
    },

    card3: {
      pic: "surfcard3.jpg",
      topic: "Coming Soon: The Wave Surf Camp",
      body1:
        "Our other Sri Lankan surf camp is coming online soon. Stay tuned!",
      link: "/wave-camp",
    },

    card4: {
      pic: "surfcard4.jpg",
      topic: "The Surfer Surf Style",
      body1:
        "Take your skills to the next level with our advanced surf training camp. Designed for serious surfers seeking to improve technique and form.",
      link: "/style-camp",
    },
  };

  const destinations = [
    {
      image: "srilanka.jpg",
      title: "Sri Lanka",
      link: "/srilanka",
    },
    {
      image: "morocco.jpg",
      title: "Morocco",
      link: "/morocco",
    },
  ];


  // Arrange all four cards in a single row, then the paragraph below
  const cardList = Object.values(cards);

  return (
    <div>

      <div className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex items-center mb-4">
        <Navbar />

        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/Surf.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="container relative z-10 text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[120px] font-bold mt-16 sm:mt-8 md:mt-4 max-w-full sm:max-w-3xl mx-auto">
            The Surfer <br /> Surf Camps
          </h2>
        </div>
      </div>


      <SurfingJourney />


      {/* Custom grid for surf camp cards and Difference paragraph */}
      <div className="max-w-7xl mx-auto py-10">
        {/* All four cards in the same row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardList.map((card, index) => (
            <motion.div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SurfCampCard
                pic={card.pic}
                topic={card.topic}
                body1={card.body1}
                body2={card.body2}
                link={card.link}
                index={index}
              />
            </motion.div>
          ))}
        </div>
        {/* Difference paragraph below first two cards, aligned with them */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Difference />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ChooseSurfCamp />
      </motion.div>

      <div className="max-w-6xl mx-auto mb-16">
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <ImageCard
              key={index}
              image={destination.image}
              title={destination.title}
              link={destination.link}
              index={index}
            />
          ))}
        </div>
      </div>

      <SurfurWay />

      <SurfPackageCard />

      <Activities />

      <MasonryGrid />

      <Reviews />

      <FAQ />

      <Blogs />

      <FooterStats />

      <Footer />
    </div>
  );
};

export default Home;
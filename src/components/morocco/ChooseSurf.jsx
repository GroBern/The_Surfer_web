import React from 'react';
import { Award, Users, Home, Globe } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const PillarCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-2">
    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
    </div>

    <h3 className="text-neutral-400 font-semibold text-sm mb-3 leading-tight">
      {title}
    </h3>

    <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

export default function ChooseSurfCamp() {
  const pillars = [
    {
      icon: Award,
      title: "Unique Locations",
      description: "Each camp offers its own vibe—from beachfront energy in Sri Lanka to cultural calm in Morocco."
    },
    {
      icon: Users,
      title: "Expert Local Coaches",
      description: "Learn from certified instructors who know every break like the back of their hand."
    },
    {
      icon: Home,
      title: "Comfortable Accommodations",
      description: "From cozy dorms to deluxe rooms, we offer clean and stylish stays that fit every budget."
    },
    {
      icon: Globe,
      title: "Global Surf Community",
      description: "Join surfers from over 50 countries and create friendships that last long after your trip ends."
    }
  ];

  return (
    <motion.div
      className="bg-gray-50 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-400 mb-2">
            Why Choose The Surfer Surf Camps?
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <PillarCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
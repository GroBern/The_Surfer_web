import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const ImageCard = () => {
  return (
    <motion.div 
      className="max-w-7xl mx-auto p-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4 mb-6">
            <motion.div 
              className="overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <img 
                src="country/I1.jpg" 
                alt="Surfers with boards" 
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <img 
                src="country/I2.jpg" 
                alt="Surf training" 
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.h2 
              className="text-lg font-semibold text-neutral-400 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Lorem ipsum dolor sit amet,
            </motion.h2>
            <motion.p 
              className="text-sm leading-relaxed text-neutral-400 mx-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod 
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis 
              autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            className="overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300 h-80"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img 
              src="country/I3.jpg" 
              alt="Sunset surfing" 
              className="w-full h-80 min-h-80 lg:min-h-96 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImageCard;

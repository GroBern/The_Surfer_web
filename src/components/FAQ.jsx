import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'WHAT MAKES THE SURFER STAND OUT FROM THE REST ?',
    answer: `It is actually pretty simple. Both the Beach Camp and the TS2 Weligama Surf Camps in Sri Lanka just off the surf break in Weligama at two really beginner friendly spots. Our best surf camps in Sri Lanka just next door you have more surf spots to enjoy and also some secret spots where you can surf peacefully. Our team of seasoned and experienced surf instructors only take six people maximum per instructor for each surf lesson.\n\nThe owner and management of the hotel is Lahiru, a local Sri Lankan who knows all about the local scene and a licenced qualified ISA/ISL surf instructor.`
  },
  {
    question: 'WHAT IS THE DIFFERENCE BETWEEN THE SURFER BEACH CAMP AND TS2 WELIGAMA SURF CAMP ?',
    answer: ''
  },
  {
    question: 'WHEN DOES THE SEASON START AND WHAT ARE THE WEATHER CONDITIONS AND WATER TEMPERATURE LIKE ?',
    answer: ''
  },
  {
    question: 'WHAT KIND OF INSTRUCTORS ARE GOING TO TEACH US DURING SURF LESSONS?',
    answer: ''
  },
  {
    question: 'WHAT DOES THE FLIGHT COST ?',
    answer: ''
  },
  {
    question: 'HOW IS THE AREA AND WHAT IS THERE TO DO?',
    answer: ''
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="py-12 px-2 sm:px-0 flex flex-col items-center min-h-screen bg-[#fafafa]">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-neutral-400 text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        FAQ
      </motion.h1>
      <div className="w-full max-w-5xl flex flex-col gap-5">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white shadow-lg border border-neutral-100 transition-all duration-300 ${openIndex === idx ? 'ring-2 ring-neutral-200' : 'hover:shadow-xl hover:border-neutral-100'}`}
          >
            <button
              className={`w-full flex justify-between items-center px-6 py-5 focus:outline-none transition-all duration-200 ${openIndex === idx ? 'rounded-t-xl bg-neutral-50/40' : 'rounded-xl hover:bg-neutral-50'}`}
              onClick={() => handleToggle(idx)}
            >
              <span className={`text-lg md:text-xl font-bold text-left transition-colors duration-200 ${openIndex === idx ? 'text-neutral-400' : 'text-neutral-400'}`}>
                {item.question}
              </span>
              <span className={`text-3xl font-bold transition-colors duration-200 ${openIndex === idx ? 'text-neutral-400' : 'text-neutral-400'}`}>
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>
            {openIndex === idx && item.answer && (
              <div className="px-6 pb-6 text-base md:text-lg text-neutral-500 animate-fadein">
                {item.answer.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0 leading-relaxed">{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

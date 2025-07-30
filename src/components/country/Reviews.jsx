import React from 'react'
import { motion } from 'framer-motion';

const ReviewsCard = (props) => {
    return (
        <motion.div 
            className='w-full md:w-1/3 bg-gray-100 border-2 border-gray-300 pt-8 md:border-none p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
            }}
        >
            <motion.div 
                className='flex flex-col justify-left items-left mt-2 gap-3'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.img 
                    className='rounded-full w-1/4 shadow-lg border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300' 
                    src={props.img} 
                    alt="img"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.h1 
                    className='font-semibold ml-1 xl:text-[25px] bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {props.name}
                </motion.h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <p className='text-black-600 xl:text-[16px] ml-1 leading-relaxed hover:text-gray-800 transition-colors duration-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, 
                    dolorem corporis beatae quod id enim voluptatem rem odio recusandae illo repudiandae reiciendis vitae, 
                    tempore, sit fugit nostrum iste. Aliquam, voluptas?
                </p>
            </motion.div>                     
        </motion.div>
    )
}

const Reviews = () => {
    const reviewsData = [
        { id: 1, img: "country/review.png", name: "John" },
        { id: 2, img: "country/review.png", name: "Rose" },
        { id: 3, img: "country/review.png", name: "Kevin" },
        { id: 4, img: "country/review.png", name: "David" }            
    ];

    return (
        <div className='py-8 flex flex-col items-center justify-center md:px-25 px-5'>
            <motion.h1 
                className='text-3xl md:text-4xl lg:text-5xl mb-8 font-bold text-neutral-400 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
            >
                Reviews
            </motion.h1>
            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                {reviewsData.map((review) => (
                    <ReviewsCard 
                        key={review.id}
                        img={review.img} 
                        name={review.name}
                    />
                ))}
            </div>


        
        </div>
    );
}

export default Reviews;
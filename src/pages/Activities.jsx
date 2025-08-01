import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";



const Activities = () => {


    return (
        <div>

            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
                style={{ backgroundImage: "url('/surf.jpg')" }} id='Header'>
                <Navbar />
                <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[120px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
                        Activities
                    </h2>
                </div>
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 py-10 text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-[#0a67b3] mb-4">
                    Have an unforgettable surf holiday
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                    No matter if you ever surfed before or not. We at The Surfer take care of your unique surfing experience—from beginners to advanced surfers.
                </p>
            </div>

            {/* Image Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-10">
                <div className="w-full h-72 overflow-hidden shadow-md">
                    <img
                        src="/activities/main1.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-72 overflow-hidden shadow-md">
                    <img
                        src="/activities/main2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Video Banner */}
            <div className="max-w-7xl mx-auto px-4 pb-10">
                <div className="w-full h-72 md:h-96 overflow-hidden shadow-md">
                    <img
                        src="/activities/people1.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Info Section 1 */}
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:justify-between gap-6">
                <div className="w-full md:w-1/2">
                    <img
                        src="/activities/people.jpg"
                        alt=""
                        className="w-full shadow-md object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 text-right">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0a67b3] mb-2">
                        MEET NEW PEOPLE FROM ALL AROUND THE WORLD
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        We have plenty of activities for you and we have group events for you every day. No matter if you're with friends or traveling solo, you are never alone at The Surfer.
                    </p>
                </div>
            </div>

            {/* Info Section 2 */}
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center md:justify-between gap-6">
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0a67b3] mb-2">
                        MAKE NEW FRIENDS FOR LIFE
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Once you visit The Surfer Sri Lanka, you’ll always be part of our family.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="/activities/friends.jpg"
                        alt=""
                        className="w-full shadow-md object-cover"
                    />
                </div>
            </div>

            {/* Info Section 3 */}
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:justify-between gap-6">
                <div className="w-full md:w-1/2">
                    <img
                        src="/activities/boat.jpg"
                        alt=""
                        className="w-full shadow-md object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 text-right">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0a67b3] mb-2">
                        BOAT PARTY
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        #BOATPARTY! If you’ve ever attended our legendary boat party, you’ll never forget it!
                    </p>
                </div>
            </div>

            {/* Second Video */}
            {/* <div className="max-w-7xl mx-auto px-4 pb-10">
                <div className="w-full h-72 md:h-96 overflow-hidden shadow-md">
                    <img
                        src="/activities/people3.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div> */}

            {/* Booking CTA */}
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a67b3] mb-6">
                    Book your spot now
                </h2>
                <button
                    onClick={() =>
                        window.location.replace(
                            "https://main.d7z80586kqd0r.amplifyapp.com/"
                        )
                    }
                    className="bg-[#0a67b3] hover:bg-[#095a99] text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
                >
                    Booking
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Activities;
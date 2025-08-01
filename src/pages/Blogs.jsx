import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";

const blogsData = [
    {
        id: 1,
        title: "Surf Ethics—5 rules that every beginner needs to know about ",
        description:
            "Surfing is a challenging sport, it requires patience, commitment, and above all skill to become",
        image: "blogs/blog1.jpg",
        content: "Full blog content about Sri Lanka travels and experiences...",
    },
    {
        id: 2,
        title: "5 health benefits of surfing that are just out of this world",
        description:
            "When talking about the health benefits of an outdoor activity surfing seldom comes to mind.",
        image: "blogs/blog2.jpg",
        content: "There is always a price to pay, a compromise that needs to be done when",
    },
    {
        id: 3,
        title: "The Surfer—Brace Yourself for an Ultimate Surfing and Yoga Experience",
        description:
            "Does the idea of riding humongous waves with utmost precision amaze you? Do you love",
        image: "blogs/blog3.jpg",
        content: "Explore the authentic flavors of Sri Lanka...",
    },
    {
        id: 4,
        title: "5 BASIC SURFING TIPS FOR BEGINNERS",
        description:
            "Are you a beginner surfer learning how to masterfully surf the shores? Here are 5",
        image: "blogs/blog4.jpg",
        content: "Full blog content about adventure activities in Sri Lanka...",
    },
    {
        id: 5,
        title: "WHAT ARE SURFBOARD FINS?—HOW MANY TYPES ARE THERE?",
        description:
            "It doesn’t matter if you are a professional or a beginner level surfer because you",
        image: "blogs/blog5.jpg",
        content: "Detailed guide on cultural heritage sites in Sri Lanka...",
    },
    {
        id: 6,
        title: "CURRENT SITUATION IN SRI LANKA",
        description:
            "All you need to know for hassle free and easy surf trip! THE LATEST UPDATE ON",
        image: "blogs/blog6.jpg",
        content:
            "Full blog content about wildlife safaris in Yala National Park...",
    },
    {
        id: 7,
        title: "EVERYTHING YOU NEED TO KNOW ABOUT DIFFERENT SURFING STYLES ",
        description:
            "Surfing is a complete sport as it engages every muscle in your body. You are ",
        image: "blogs/blog7.jpg",
        content: "Detailed guide on beach hopping in Sri Lanka...",
    },
    {
        id: 8,
        title: "TEN TERMS FROM THE SURFING WORLD YOU MUST KNOW! ",
        description:
            "Every sport out there has its own specific lingo and to be able to understand ",
        image: "blogs/blog8.jpg",
        content: "Full blog content about wellness retreats in Sri Lanka...",
    },
    {
        id: 9,
        title: "5 EXCEPTIONAL WAYS TO IMPROVE YOUR SURFING 2022 ",
        description:
            "There is always a price to pay, a compromise that needs to be done when",
        image: "blogs/blog9.jpg",
        content: "Detailed guide on Sigiriya Rock Fortress...",
    },
    {
        id: 10,
        title: "SIX COMMON SURFING BLUNDERS BEGINNERS MAKE ",
        date: "25. October 2022 / Surfing",
        description:
            "Most beginners that come around surfing think that it would be an easy job, they ",
        image: "blogs/blog10.jpg",
        content: "Full blog content about the best beaches in Sri Lanka...",
    },
    {
        id: 11,
        title: "WHAT SIZE OF SURFBOARD IS BEST FOR YOU? ",
        description:
            "Regardless of the fact if you are a beginner, a professional, or just in between ",
        image: "blogs/blog11.jpg",
        content: "Detailed guide on Sri Lankan festivals and events...",
    },
    {
        id: 12,
        title: "THREE SURF SAFETY ESSENTIALS FOR THE BEGINNERS ",
        description:
            "If you ever wanted to be free like truly liberated in every sense of the ",
        image: "/images/blogs/blog12.jpg",
        content: "Detailed guide on Sri Lankan festivals and events...",
    },
    {
        id: 13,
        title: "A QUICK GUIDE TO SURFING FOR BEGINNERS",
        description:
            "People are taking up surfing as a hobby right and left and unlike other sports ",
        image: "blogs/blog13.jpg",
        content: "Detailed guide on Sri Lankan festivals and events...",
    },
];

const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>

            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
                style={{ backgroundImage: "url('/blog.jpg')" }} id='Header'>
                <Navbar />
                <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='font-[montserrat] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[120px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
                        Blogs
                    </h2>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 my-20">
                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentBlogs.map((blog) => {
                        const isEven = blog.id % 2 === 0;
                        return (
                            <div
                                key={blog.id}
                                className={`overflow-hidden shadow-lg flex flex-col justify-between ${isEven ? "bg-white text-[#0a67b3]" : "bg-[#0a67b3] text-white"
                                    } transition duration-300 hover:shadow-xl`}
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex flex-col gap-2">
                                    <span className="text-xs text-gray-400">
                                        27. June 2023 / Surfing
                                    </span>
                                    <h2 className="font-semibold text-lg">{blog.title}</h2>
                                    <p className="text-sm leading-snug">
                                        {blog.description.split(" ").slice(0, 50).join(" ")}...
                                    </p>
                                </div>
                                <div
                                    className={`px-4 py-2 text-sm font-medium ${isEven
                                        ? "bg-[#0a67b3] text-white"
                                        : "bg-white text-[#0a67b3]"
                                        }`}
                                >
                                    <a href={`/blog/${blog.id}`} className="hover:underline">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10 gap-2">
                    {[...Array(Math.ceil(blogsData.length / blogsPerPage))].map(
                        (_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`w-9 h-9 rounded-full text-sm font-medium transition-all duration-200 ${currentPage === index + 1
                                    ? "bg-[#0a67b3] text-white shadow-md"
                                    : "bg-white text-[#0a67b3] border border-[#0a67b3] hover:bg-[#0a67b3] hover:text-white"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
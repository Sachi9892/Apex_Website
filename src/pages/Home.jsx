import React, { useState, useEffect } from 'react'
import { cards, images } from '../data/others/HomeData'
import ExploreCountries from '../components/ExploreCountries'
import ExploreExams from "../components/ExploreExams"


function Home() {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 2000); // 1 second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="w-full flex flex-col items-center space-y-8">


            {/* Banner Section */}
            <div className="relative w-full h-[450px] md:h-[520px]">
                <img
                    src="src/assets/img/exams/others/immi.jpg"
                    alt="Immi Banner"
                    className="w-full h-full object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute right-0 top-1/2  transform -translate-y-1/2 px-6 md:px-12 w-full md:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Welcome To Apex Consultant
                    </h2>
                    <p className="text-white text-sm md:text-lg">
                        Trust Apex Consultancy expert mentors to equip you with the
                        knowledge and strategies you need to succeed.
                    </p>
                </div>
            </div>

            {/* Left content + right image */}
            <div className="w-full flex flex-col md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-white">

                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Championing Student Success
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base">
                        Apex Consultant stands as the ultimate destination for all foreign education and immigration services for more than 23 years.
                        Our counselors serve as the bedrock of our association, meticulously guiding each individual with utmost care.
                        With a keen focus on identifying each student’s unique strengths and limitations, our experienced counselors ensure a personalized approach to every journey.
                    </p>

                    {/* Button for medium and up */}
                    <div className="hidden md:block">
                        <button className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <img
                        src="src/assets/img/models/model1.png"
                        alt="model"
                        className="w-auto h-[400px] md:h-[500px] object-contain border-collapse rounded-xl shadow-none"
                    />

                    {/* Button for small screens only */}
                    <div className="mt-4 md:hidden">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>


            {/* Cards */}
            <div className="bg-gray-100 py-10 px-4 md:px-16">
                <h2 className="text-lg sm:text-xl md:text-3xl font-medium text-black text-center mt-2">
                    <strong>One-Stop Destination for All Your Study Abroad Needs</strong>
                </h2>
                <p className="text-sm sm:text-sm md:text-lg font-medium text-black text-center mt-2">
                    Apex streamlines your entire study abroad journey for success.
                </p>

                <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative group rounded-xl overflow-hidden shadow-lg h-64 cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                            />

                            {/* Top Heading */}
                            <div className="absolute top-0 left-0 w-full p-4">
                                <h3 className="text-white text-lg md:text-xl font-semibold">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Description (Appears from Bottom on Hover) */}
                            <div className="absolute bottom-0 left-0 w-full p-4 text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                <p className="text-black text-sm font-medium"><strong>{card.description}</strong></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <ExploreCountries />

            <ExploreExams />


            <div
                className="w-full py-10 bg-cover bg-center"
                style={{ backgroundImage: "url('src/assets/img/countries/usa/us-bg.png')" }}
            >
                {/* USA Student Life Section */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-white">
                    <strong>Top University We Have Partnership !</strong>
                </h2>
                {/* Slideshow Image Container */}
                <div className="w-[90%] sm:w-[80%] mx-auto">
                    <img
                        src={images[current]}
                        alt={`UK Slide ${current + 1}`}
                        className="w-full max-w-full h-64 sm:h-[400px] object-cover rounded-xl shadow-md transition duration-500"
                    />
                </div>


            </div>


        </div>
    )
}

export default Home

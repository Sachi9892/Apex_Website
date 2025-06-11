import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { countryLinks } from '../data/NavLinks';


function ExploreCountries() {

    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();

    const getVisibleCountries = () => {
        const countries = [];
        for (let i = 0; i < 3; i++) {
            countries.push(countryLinks[(startIndex + i) % countryLinks.length]);
        }
        return countries;
    };

    const visibleCountries = getVisibleCountries();

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % countryLinks.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setStartIndex((prev) =>
            prev === 0 ? countryLinks.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % countryLinks.length);
    };

    return (
        <div className="w-full flex flex-col items-center py-10 space-y-8 bg-gray-50">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                <strong>Explore Countries With Apex Edutech</strong>
            </h2>

            <div className="flex flex-col sm:flex-row items-center w-full max-w-7xl px-2 ml-2 sm:px-4 space-y-4 sm:space-y-0 sm:space-x-4 ml-2">
                {/* Left Arrow - Side for Desktop */}
                <button
                    onClick={handlePrev}
                    className="hidden sm:block text-2xl sm:text-3xl md:text-4xl px-2 hover:scale-125 transition"
                >
                    〈
                </button>

                {/* Cards */}
                <div className="flex flex-col sm:flex-row justify-between w-full">
                    {visibleCountries.map((country, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(country.path)}
                            className="w-full sm:w-1/3 bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col items-center text-center cursor-pointer mb-4 sm:mb-0"
                        >
                            <div className="w-full h-40 mb-3 overflow-hidden">
                                <img
                                    src={country.flag}
                                    alt={country.name}
                                    className="w-full h-full border object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-base font-medium">{country.name}</p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow - Side for Desktop */}
                <button
                    onClick={handleNext}
                    className="hidden sm:block text-2xl sm:text-3xl md:text-4xl px-2 hover:scale-125 transition"
                >
                    〉
                </button>
            </div>

            {/* Arrows below for Mobile */}
            <div className="flex sm:hidden space-x-6 text-3xl">
                <button onClick={handlePrev} className="hover:scale-125 transition">〈</button>
                <button onClick={handleNext} className="hover:scale-125 transition">〉</button>
            </div>
        </div>
    );




}

export default ExploreCountries

import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full max-w-3xl mx-auto relative">
            {/* Image */}
            <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-100"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-100"
            >
                ›
            </button>
        </div>
    );
};

export default ImageSlider;

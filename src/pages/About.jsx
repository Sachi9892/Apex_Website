import React from 'react'
import { steps } from '../data/others/AboutData'

function About() {
    return (
        <div className="w-full flex flex-col items-center bg-gray-100 py-12 px-4 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12 leading-snug">
                Leading & Pioneer in Student Visa and Immigration
            </h2>

            <div className="w-full max-w-5xl space-y-10">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm md:text-base">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About

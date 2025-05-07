import React from 'react'
import { satCrack, satFacts, satProgram } from '../../data/exams/SatData'

function SAT() {
    return (
        <div className="w-full flex flex-col items-center space-y-8">

            {/* Banner Section  */}
            <div className="flex flex-col md:flex-row items-center w-full">
                <div className="w-full md:w-1/2">
                    <img
                        src="src\assets\img\exams\sat.png"
                        alt="GMAT Banner"
                        className="block w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-4 md:mt-0 mb-2 md:mb-4 text-center md:text-left">
                        Best SAT Coaching in Mumbai
                    </h2>
                    <p className="text-gray-700 mb-4 md:mb-6 text-center md:text-left">
                        Trust Apex Consultancy expert SAT mentors to equip you with the
                        knowledge and strategies you need to succeed. Thousands of SAT aspirants have got their desired score with us.
                    </p>
                    <div className="items-center justify-center">
                        <button className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
                            Book Free Demo Class !
                        </button>
                    </div>
                </div>
            </div>

            {/* Facts about the sat  */}
            <div className='bg-pink-200 w-full'>
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black text-center mt-6 md:mt-10"><strong>Quick Facts About SAT</strong></h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
                    {satFacts.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-black transition duration-400"
                        >
                            <h4 className="text-lg font-bold mb-2 text-black-700">{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Exam Structure  */}
            <div className='bg-red-500 w-full'>
                <div className="px-4 md:px-8 w-full overflow-x-auto mb-10">
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white text-center mt-6 md:mt-10">SAT Exam Structure</h3>
                    <table className="min-w-[250px] md:min-w-full bg-white border rounded-sm border-gray-300 text-sm md:text-base mt-8">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="text-left py-3 px-4 border-b">Section</th>
                                <th className="text-left py-3 px-4 border-b">Number of Questions</th>
                                <th className="text-left py-3 px-4 border-b">Type of Questions</th>
                                <th className="text-left py-3 px-4 border-b">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-red-200">
                                <td className="py-3 px-4 border-b font-medium">Math</td>
                                <td className="py-3 px-4 border-b">40</td>
                                <td className="py-3 px-4 border-b">Multiple answer questions Student produced responses</td>
                                <td className="py-3 px-4 border-b">70 minutes</td>
                            </tr>
                            <tr className="hover:bg-red-200">
                                <td className="py-3 px-4 border-b font-medium">Critical reading</td>
                                <td className="py-3 px-4 border-b">40</td>
                                <td className="py-3 px-4 border-b">Sentence completion Critical
                                    reading : long and short passages</td>
                                <td className="py-3 px-4 border-b">70 minutes</td>
                            </tr>
                            <tr className="hover:bg-red-200">
                                <td className="py-3 px-4 border-b font-medium">Writing</td>
                                <td className="py-3 px-4 border-b">40</td>
                                <td className="py-3 px-4 border-b">	Essay presenting your view point.
                                    Multiple choice – error
                                    identification Improving sentences
                                    and paragraphs</td>
                                <td className="py-3 px-4 border-b">25 minute essay section,
                                    35 minute MCQs</td>
                            </tr>

                        </tbody>
                    </table>
                    <p className="text-white text-sm mt-2">** for more information contact us !</p>
                </div>
            </div>


            {/* marks */}
            <div className="w-full bg-pink-50 border-collapse rounded-lg p-4 md:p-8">

                <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black text-center mt-4 md:mt-10">
                    What is a Good SAT Score?
                </h3>

                <div className="mt-4  md:mt-6 px-2 md:px-16">
                    <img
                        src="src/assets/img/exams/banners/sat-score.png"
                        alt="SAT Score"
                        className="w-full mt-8 h-auto max-h-[700px] object-contain mx-auto"
                    />
                </div>

            </div>




            {/* Crack SAT Section (Looks responsive with grid) */}
            <div className='bg-red-500 w-full'>
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black text-center mt-4 md:mt-10">Crack SAT with <strong>7+</strong> Bands in 30 Days With Apex Consultancy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
                    {satCrack.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-black transition duration-400"
                        >
                            <h4 className="text-lg font-bold mb-2 text-black-700">{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            <br />

            {/* Discover Our SAT Programs */}
            <div className="w-full py-12 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-black text-center md:mt-4">
                        Discover Our SAT Programs
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-black text-center mt-2 md:mt-6">
                        Choose your path to start your SAT Prep Journey.
                    </p>
                    <div className="flex justify-center"> {/* Changed this line */}
                        {satProgram.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white mt-4 rounded-lg shadow-md overflow-hidden hover:shadow-black transition-shadow duration-400 max-w-md"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-blue-600 mb-4">{program.title}</h3>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Time:</strong> {program.time}
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Batch Starts:</strong> {program.batchStart}
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        <strong>Duration:</strong> {program.duration}
                                    </p>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {program.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-6">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full w-full">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* image for the apply now button */}
            <div className="flex flex-col md:flex-row items-center w-full bg-gradient-to-r from-indigo-100 via-red-300 to-pink-200">
                <div className="w-full md:w-1/2">
                    <img
                        src="src/assets/img/models/boy.png"
                        alt="SAT Banner"
                        className="block max-w-[300px] w-full h-auto object-contain mx-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
                    <h2 className="text-xl md:text-2xl font-bold text-black mt-4 md:mt-0 mb-2 md:mb-4 text-center md:text-left">
                        Start Your SAT journey now!
                    </h2>
                    <button className="mt-2 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
                        Contact Us!
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SAT

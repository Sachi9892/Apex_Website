import React from 'react';
import { gmatData, crackGmat, programData } from '../../data/exams/GmatData';
import ExploreExams from '../../components/ExploreExams';
import ExploreCountries from '../../components/ExploreCountries';
import ImageWithTextAndButton from '../../components/ImageWithTextAndButton';
import { useNavigate } from "react-router-dom";

function GMAT() {

  const navigate = useNavigate()

  return (

    <div className="w-full flex flex-col items-center space-y-8">


      {/* Banner Section  */}
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/img/exams/banners/gmat-banner.png"
            alt="GMAT Banner"
            className="block w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-4 md:mt-0 mb-2 md:mb-4 text-center md:text-left">
            Best GMAT Coaching in Mumbai
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6 text-center md:text-left">
            Trust Apex Edutech expert GMAT mentors to equip you with the
            knowledge and strategies you need to succeed. Thousands of GMAT aspirants have got their desired score with us.
          </p>
          <div className="items-center justify-center">
            <button onClick={() => navigate("/contact-us")} className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
              Book Free Demo Class!
            </button>
          </div>
        </div>
      </div>

      {/* Facts about the gmat  */}
      <div className='bg-pink-100 w-full'>
        <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black text-center mt-8 md:mt-8"><strong>Quick Facts About GMAT</strong></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
          {gmatData.map((card, index) => (
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
          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white text-center mt-6 md:mt-4">GMAT Exam Structure</h3>
          <table className="min-w-[250px] md:min-w-full bg-white border border-gray-500 text-sm md:text-base mt-8">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="text-left py-3 px-4 border-b">Section</th>
                <th className="text-left py-3 px-4 border-b">Number of Questions</th>
                <th className="text-left py-3 px-4 border-b">Type of Questions</th>
                <th className="text-left py-3 px-4 border-b">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Verbal Reasoning</td>
                <td className="py-3 px-4 border-b">36</td>
                <td className="py-3 px-4 border-b">
                  <ul className="list-disc list-inside">
                    <li>Critical Reasoning</li>
                    <li>Sentence Correction</li>
                    <li>Reading Comprehension</li>
                  </ul>
                </td>
                <td className="py-3 px-4 border-b">75 minutes</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Quantitative Reasoning</td>
                <td className="py-3 px-4 border-b">31</td>
                <td className="py-3 px-4 border-b">
                  <ul className="list-disc list-inside">
                    <li>Problem Solving</li>
                    <li>Data Sufficiency</li>
                  </ul>
                </td>
                <td className="py-3 px-4 border-b">75 minutes</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Integrated Reasoning</td>
                <td className="py-3 px-4 border-b">12</td>
                <td className="py-3 px-4 border-b">
                  <ul className="list-disc list-inside">
                    <li>Table Analysis</li>
                    <li>Two-Part Analysis</li>
                    <li>Graphics Interpretation</li>
                    <li>Multi-source Reasoning</li>
                  </ul>
                </td>
                <td className="py-3 px-4 border-b">30 minutes</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Analytical Writing Assessment (AWA)</td>
                <td className="py-3 px-4 border-b">1</td>
                <td className="py-3 px-4 border-b">Argument Analysis</td>
                <td className="py-3 px-4 border-b">30 minutes</td>
              </tr>
            </tbody>
          </table>
          <p className="text-white text-sm mt-2">← Swipe left to see the full table on smaller screens.</p>
        </div>
      </div>

      {/* {What is a Good GMAT Score} */}
      <div className='w-full bg-pink-50 border-collapse rounded-lg p-8'>
        <h3 className="text-lg sm:text-base md:text-3xl font-bold text-black text-center mt-4 md:mt-4">What is a Good GMAT Score?</h3>
        <div className="mt-6 px-4 md:px-16"> {/* Added padding for better mobile spacing */}
          <img
            src="src/assets/img/exams/banners/gmat-score.png"
            alt="GMAT Score"
            className="w-full max-w-[500px] max-h-[400px] h-auto object-contain mx-auto"
          />
        </div>
      </div>


      {/* Crack GMAT Section (Looks responsive with grid) */}
      <div className='bg-red-500 w-full'>
        <h3 className="text-lg sm:text-base md:text-3xl font-bold text-white text-center mt-6 md:mt-4">Crack GMAT with <strong>650+</strong> Score in 90 Days With Apex Edutech</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
          {crackGmat.map((card, index) => (
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

      {/* Discover Our GMAT Programs */}
      <div className="w-full py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black text-center mt-6">
            Discover Our GMAT Programs
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-black text-center mt-2">
            Choose your path to start your GMAt Prep Journey.
          </p>

          {/* Flex layout for 2 narrower cards */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            {programData.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-black transition-shadow duration-400 w-full max-w-sm"
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
                    <button onClick={() => navigate("/contact-us")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <ImageWithTextAndButton
        bgImage="src/assets/img/countries/ireland/ireland-bg.png"
        heading="Prep For GMAT"
        imgSrc="src/assets/img/models/boy.png"
      />

      <ExploreExams />

      <ExploreCountries />




    </div>
  );
}

export default GMAT;
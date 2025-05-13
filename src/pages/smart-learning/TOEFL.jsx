import React from 'react'
import { toeflCrack, toeflProgram, toeflFacts } from '../../data/exams/ToeflData'
import ExploreExams from '../../components/ExploreExams'
import ExploreCountries from '../../components/ExploreCountries'
import ImageWithTextAndButton from '../../components/ImageWithTextAndButton'
import { useNavigate } from "react-router-dom"


function TOEFL() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center space-y-8">

      {/* Banner Section  */}
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-1/2">
          <img
            src="src\assets\img\exams\toefl.png"
            alt="GMAT Banner"
            className="block w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-4 md:mt-0 mb-2 md:mb-4 text-center md:text-left">
            Best DUOLINGO Coaching in Mumbai
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6 text-center md:text-left">
            Trust Apex Educare expert DUOLINGO mentors to equip you with the
            knowledge and strategies you need to succeed. Thousands of GMAT aspirants have got their desired score with us.
          </p>
          <div className="items-center justify-center">
            <button onClick={() => navigate("/contact-us")} className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
              Book Free Demo Class !
            </button>
          </div>
        </div>
      </div>


      {/* Facts about the toefl  */}
      <div className='bg-pink-200 w-full'>
        <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black text-center mt-6 md:mt-10"><strong>Quick Facts About TOEFL</strong></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
          {toeflFacts.map((card, index) => (
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
          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white text-center mt-6 md:mt-10">TOEFL Exam Structure</h3>
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
                <td className="py-3 px-4 border-b font-medium">Reading</td>
                <td className="py-3 px-4 border-b">36-70</td>
                <td className="py-3 px-4 border-b align-top"> {/* Added align-top */}
                  3-5 passages from academic texts;
                  approx 700 word long with 12-14
                  questions per passage.
                </td>
                <td className="py-3 px-4 border-b">60-90 minutes</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Listening</td>
                <td className="py-3 px-4 border-b">34-51</td>
                <td className="py-3 px-4 border-b align-top"> {/* Added align-top */}
                  4-6 lectures each 3-5 min long;
                  6 question each.
                  2-3 conversation, each 3 minutes long; 5
                  questions each.
                </td>
                <td className="py-3 px-4 border-b">60-90 minutes</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Speaking</td>
                <td className="py-3 px-4 border-b">6 tasks</td>
                <td className="py-3 px-4 border-b align-top"> {/* Added align-top */}
                  2 tasks to express an opinion on a topic
                  4 tasks to speak based on what is read
                  and listened to.
                </td>
                <td className="py-3 px-4 border-b">20 minute</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Writing</td>
                <td className="py-3 px-4 border-b">2 tasks</td>
                <td className="py-3 px-4 border-b align-top"> {/* Added align-top */}
                  1 task to write based on what is read or
                  listened to
                  1 task to support an opinion on a topic.
                </td>
                <td className="py-3 px-4 border-b">50 minute</td>
              </tr>

            </tbody>
          </table>
          <p className="text-white text-sm mt-2">** for more information contact us !</p>
        </div>
      </div>


      {/* marks */}
      <div className="w-full bg-pink-50 border-collapse rounded-lg p-4 md:p-8">

        <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black text-center mt-4 md:mt-10">
          What is a Good TOEFL Score?
        </h3>

        <div className="mt-4  md:mt-6 px-2 md:px-16">
          <img
            src="src\assets\img\exams\banners\toefl-marks.png"
            alt="TOEFL Score"
            className="w-full mt-8 h-auto max-h-[700px] object-contain mx-auto"
          />
        </div>

      </div>




      {/* Crack TOEFL Section (Looks responsive with grid) */}
      <div className='bg-red-500 w-full'>
        <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white text-center mt-4 md:mt-10">Crack TOEFL with <strong>7+</strong> Bands in 30 Days With Apex Educare</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
          {toeflCrack.map((card, index) => (
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

      {/* Discover Our TOEFL Programs */}
      <div className="w-full py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black text-center mt-6">
            Discover Our TOEFL Programs
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-black text-center mt-2">
            Choose your path to start your TOEFL Prep Journey.
          </p>

          {/* Flex layout for 2 narrower cards */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            {toeflProgram.map((program, index) => (
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
        bgImage="src/assets/img/countries/canada/canada-bg.png"
        heading="Prep For TOEFL"
        imgSrc="src/assets/img/models/boy.png"
      />


      <ExploreExams />


      <ExploreCountries />


    </div>
  )
}

export default TOEFL

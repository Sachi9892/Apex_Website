import React from 'react'

import { greFactsData } from '../../data/GreData'

function GRE() {
  return (
    <div className="w-full flex flex-col items-center space-y-8">

      {/* Banner Section  */}
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/img/exams/banners/gre1.png"
            alt="GMAT Banner"
            className="block max-w-[500px] w-full h-auto object-contain mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-4 md:mt-0 mb-2 md:mb-4 text-center md:text-left">
            Best GRE Coaching in Mumbai
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6 text-center md:text-left">
            Trust Apex Consultancy expert GRE mentors to equip you with the
            knowledge and strategies you need to succeed. Thousands of GMAT aspirants have got their desired score with us.
          </p>
          <div className="items-center justify-center">
            <button className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
              Book Free Demo Class!
            </button>
          </div>
        </div>
      </div>

      {/* Facts about the gre  */}
      <div className='bg-pink-100 w-full'>
        <h3 className="text-3xl font-semibold text-black-600 mt-10 text-center"><strong>Quick Facts About GRE</strong></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
          {greFactsData.map((card, index) => (
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
          <h3 className="text-3xl font-bold text-white mb-6 mt-10 text-center">GRE Exam Structure</h3>
          <table className="min-w-[250px] md:min-w-full bg-white border rounded-sm border-gray-300 text-sm md:text-base mt-8">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left py-3 px-4 border-b">Section</th>
                <th className="text-left py-3 px-4 border-b">Number of Questions</th>
                <th className="text-left py-3 px-4 border-b">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-medium">Analytical Writing</td>
                <td className="py-3 px-4 border-b">	One 'Analyse an Issue' task and
                  one 'Analyse an Argument' task</td>
                <td className="py-3 px-4 border-b">30 minutes per task</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-medium">Verbal Reasoning
                  (2 sections)</td>
                <td className="py-3 px-4 border-b">2</td>
                <td className="py-3 px-4 border-b">60 minutes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-medium">Listening</td>
                <td className="py-3 px-4 border-b">40</td>
                <td className="py-3 px-4 border-b">30 minutes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-medium">Quantitative Reasoning
                  (2 sections)</td>
                <td className="py-3 px-4 border-b">40</td>
                <td className="py-3 px-4 border-b">30 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default GRE

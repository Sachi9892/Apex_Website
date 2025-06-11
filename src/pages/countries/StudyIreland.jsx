import React, { useState, useEffect } from 'react'

import { irelandInfo, irelandTestAccordion, images, whyToStudyIreland } from '../../data/country/IrelandData';

import ExploreCountries from '../../components/ExploreCountries';
import ExploreExams from '../../components/ExploreExams';
import ImageWithTextAndButton from '../../components/ImageWithTextAndButton';
import { useNavigate } from "react-router-dom";

function StudyIreland() {

  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <div className="w-full flex flex-col items-center space-y-8">

      {/* Banner Section */}
      <div className="relative w-full ">
        <div className="w-full">
          <img
            src="src\assets\img\countries\ireland\ireland.png"
            alt="GMAT Banner"
            className="block  max-h-[600px] w-full h-auto object-cover"
          />
        </div>
        {/* Desktop Button */}
        <div className="absolute bottom-4 left-4 md:block hidden">
          <button onClick={() => navigate("/contact-us")} className="text-center ml-10 mb-32 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
            Click To Fly !
          </button>
        </div>
        {/* Mobile Button */}
        <div className="mt-4 md:hidden flex justify-center">
          <button className="text-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
            Click To Fly !
          </button>
        </div>
      </div>

      {/* Why to study in Ireland  */}
      <div className='bg-pink-100 w-full'>
        <h3 className="text-xl mt-4 sm:text-2xl md:text-3xl font-bold text-center mt-2"><strong>Why To Study In Ireland</strong></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 w-full mb-10 mt-8">
          {whyToStudyIreland.map((card, index) => (
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



      {/* Tests Required to Study in Ireland */}
      <div className="w-full p-6">
        <h3 className="text-xl mt-4 sm:text-2xl md:text-3xl text-black font-bold text-center mb-8"><strong>Test Required To Study In Ireland</strong></h3>

        <div className="flex flex-col md:flex-row items-start w-full">
          {/* Accordion Section */}
          <div className="w-full md:w-1/2 space-y-4">
            {irelandTestAccordion.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white p-2 rounded-lg shadow cursor-pointer hover:shadow-black transition duration-400"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.icon}
                        alt="exam"
                        className="w-24 h-18 object-contain"
                      />
                    </div>
                    <span className="text-2xl">
                      {isOpen ? '🔺' : '🔻'}
                    </span>
                  </div>

                  {isOpen && (
                    <p className="text-gray-600 mt-3 transition-all duration-300">
                      {item.content}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Desktop Button Below Accordions */}
            <div className="hidden md:flex mt-6">
              <button onClick={() => navigate("/contact-us")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
                Start To Prep
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="src/assets/img/countries/ireland/ireland-apex.png"
              alt="model"
              className="min-w-full max-h-[500px] ml-4 md:max-w-sm w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mt-4 md:hidden flex justify-center">
          <button onClick={() => navigate("/contact-us")} className="bg-red-500  hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
            Start To Prep
          </button>
        </div>
      </div>


      {/* Courses in Ireland  */}
      <div className='w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('src/assets/img/countries/ireland/ireland-bg.png')" }}>
        <div className="px-4 md:px-8 w-full overflow-x-auto mb-10">
          <h3 className="text-xl mt-4 sm:text-2xl md:text-3xl text-white font-bold text-center mb-8"><strong>Popular Courses To Study In Ireland</strong></h3>
          <table className="min-w-[250px] md:min-w-full bg-white border border-gray-500 text-sm md:text-base mt-8">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="text-left py-3 px-4 border-b">Course</th>
                <th className="text-left py-3 px-4 border-b">Duration</th>
                <th className="text-left py-3 px-4 border-b">Average Fee (per year)</th>
                <th className="text-left py-3 px-4 border-b">Scholarship ?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Big Data</td>
                <td className="py-3 px-4 border-b">1 - 2 year</td>
                <td className="py-3 px-4 border-b">10,000 - 20,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>

              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Data Analytics</td>
                <td className="py-3 px-4 border-b">1 - 2 year</td>
                <td className="py-3 px-4 border-b">10,000 - 20,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Business Analytics</td>
                <td className="py-3 px-4 border-b"> 1 - 2 year</td>
                <td className="py-3 px-4 border-b">12,000 - 22,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Data Science</td>
                <td className="py-3 px-4 border-b">1 - 2 year</td>
                <td className="py-3 px-4 border-b">10,000 - 25,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Computer Science</td>
                <td className="py-3 px-4 border-b">2 - 4 year</td>
                <td className="py-3 px-4 border-b">12,000 - 25,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Computer Science</td>
                <td className="py-3 px-4 border-b">2 year</td>
                <td className="py-3 px-4 border-b">30,000 - 50,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Cloud Computing</td>
                <td className="py-3 px-4 border-b">1 - 2 year</td>
                <td className="py-3 px-4 border-b">10,000 - 18,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Cyber Security</td>
                <td className="py-3 px-4 border-b">1 - 2 year</td>
                <td className="py-3 px-4 border-b">12,000 - 22,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Digital Marketing</td>
                <td className="py-3 px-4 border-b">1 - 2 year</td>
                <td className="py-3 px-4 border-b">10,000 - 18,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
              <tr className="hover:bg-red-200">
                <td className="py-3 px-4 border-b font-medium">Artificial Intelligence</td>
                <td className="py-3 px-4 border-b">1 - 2 year</td>
                <td className="py-3 px-4 border-b">12,000 - 25,000</td>
                <td className="py-3 px-4 border-b">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* All you need to know about Study in Ireland */}
      <div className="w-full px-6 md:px-16 py-10 bg-gray-50">
        {/* Heading */}
        <h3 className="text-xl mt-4 sm:text-2xl md:text-3xl text-black font-bold text-center mb-8"><strong>All you need to know about Study in Ireland</strong></h3>

        {/* Navbar with background */}
        <div className="w-full bg-white p-4 rounded-xl shadow-sm mb-8 flex justify-center flex-wrap gap-4 md:gap-6">
          {irelandInfo.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 transition duration-100
                              ${activeIndex === index
                  ? 'bg-red-700 text-white' // Active style: red bg, white text, no hover
                  : 'bg-white text-red-700 hover:bg-white hover:text-black hover:border rounded-lg hover:border-red-700 rounded-lg'
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content + Image */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Left Content */}
          <div className="md:w-2/3 w-full bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              {irelandInfo[activeIndex].title}
            </h3>
            <p className="text-black whitespace-pre-line">
              {irelandInfo[activeIndex].content}
            </p>

            <div className="mt-6">
              <button onClick={() => navigate("/contact-us")} className="bg-red-700 hover:bg-white hover:text-red-700 text-white font-bold py-3 px-6 rounded-full border border-red-700 transition duration-300">
                Start Your Application
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3 w-full flex justify-center items-start">
            <img
              src={irelandInfo[activeIndex].image}
              alt={irelandInfo[activeIndex].title}
              className="object-contain w-full h-full max-h-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>



      {/* Ireland universities list */}
      <div
        className="w-full py-10 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/img/countries/ireland/ireland-bg.png')" }}
      >
        {/* USA Student Life Section */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-white">
          Best University In Ireland
        </h2>

        {/* Slideshow Image Container */}
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <img
            src={images[current]}
            alt={`USA Slide ${current + 1}`}
            className="w-full max-w-full h-64 sm:h-[400px] object-cover rounded-xl shadow-md transition duration-500"
          />
        </div>


      </div>


   

      <ImageWithTextAndButton
        bgImage="src/assets/img/countries/ireland/ireland-bg.png"
        heading="Welcome to Ireland"
        imgSrc="src/assets/img/models/boy.png"
      />


      <ExploreCountries />

      <ExploreExams />


    </div>
  )
}

export default StudyIreland

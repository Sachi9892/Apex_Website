import React from 'react'
import { edufairs } from '../../data/events/EduFairData'
import ImageWithTextAndButton from '../../components/ImageWithTextAndButton'

function EduFair() {
  return (
    <div className="w-full text-gray-800">More actions
      {/* Banner Section */}
      <div className="relative w-full h-[450px] md:h-[520px]">
        <img
          src="src/assets/img/apex/edu-loan-banner.png"
          alt="Immi Banner"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 md:px-12 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 mr-8">
            <strong>Welcome To Apex Edutech</strong>
          </h2>
          <p className="text-black mb-28 mr-8 text-sm md:text-lg">
            <strong>Trust Apex Edutech expert mentors to equip you with the
              knowledge and strategies you need to succeed.</strong>
          </p>
        </div>
      </div>

      <div className="px-4 md:px-16 py-10 bg-gray-100">

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 text-center">
          Our Global Presence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {edufairs.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={image}
                alt={`Event Location ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <ImageWithTextAndButton 
          bgImage="src\assets\img\apex\white.png"
          heading="Welcome to Edu Fair"
          imgSrc="src/assets/img/models/boy.png"
        />


      </div>



    </div>
  )
}

export default EduFair

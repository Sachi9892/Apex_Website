import React from 'react'

function TOEFL() {
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
            Trust Apex Consultancy expert DUOLINGO mentors to equip you with the
            knowledge and strategies you need to succeed. Thousands of GMAT aspirants have got their desired score with us.
          </p>
          <div className="items-center justify-center">
            <button className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
              Book Free Demo Class !
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TOEFL

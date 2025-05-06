import React from 'react'

function StudyCanada() {
  return (
    <div className="w-full flex flex-col items-center space-y-8">

      {/* Banner Section */}
      <div className="relative w-full ">
        <div className="w-full">
          <img
            src="src\assets\img\countries\canada\canada.png"
            alt="GMAT Banner"
            className="block  max-h-[600px] w-full h-auto object-cover"
          />
        </div>
        {/* Desktop Button */}
        <div className="absolute bottom-4 left-4 md:block hidden">
          <button className="text-center ml-10 mb-32 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
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



    </div>
  )
}

export default StudyCanada

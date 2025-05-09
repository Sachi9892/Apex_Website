import React from 'react'

function Forex() {
  return (
    <div className="w-full flex flex-col items-center space-y-8">


      {/* Banner Section */}
      <div className="relative w-full h-[450px] md:h-[520px]">
        <img
          src="src\assets\img\apex\forex.png"
          alt="Immi Banner"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 md:px-12 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            <strong>Welcome To Apex Consultant</strong>
          </h2>
          <p className="text-black mb-28 text-sm md:text-lg">
            <strong>Trust Apex Consultancy expert mentors to equip you with the
              knowledge and strategies you need to succeed.</strong>
          </p>
        </div>
      </div>


      {/* booking */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-white">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Hassle-free Flight Bookings</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Say goodbye to the hassle of searching for the best flight deals.
            Our experienced travel consultants will help
            you find the most convenient and cost-effective flights to your destination.</p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="src\assets\img\apex\booking.png"
            alt="grp"
            className="w-full mt-4 h-[400px] md:h-[450px] object-cover rounded-xl shadow"
          />
        </div>
      </div>


      {/* Expert Advice */}
      <div className="w-full flex flex-col md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-white">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="src/assets/img/apex/discuss.png"
            alt="grp"
            className="w-full mt-4 h-[400px] md:h-[450px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Expert Advice</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Our team of experts will provide you with valuable information about
             preparing for life in your destination country, including cultural norms,
              local customs, and travel tips, ensuring that you arrive fully prepared.
          </p>
        </div>
      </div>




    </div>
  )
}

export default Forex

import React from 'react'
import ImageWithTextAndButton from '../../components/ImageWithTextAndButton'

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
            <strong>Welcome To Apex Edutech</strong>
          </h2>
          <p className="text-black mb-28 text-sm md:text-lg">
            <strong>Trust Apex Edutech expert mentors to equip you with the
              knowledge and strategies you need to succeed.</strong>
          </p>
        </div>
      </div>


      {/* booking */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-gray-100">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-2xl md:text-3xl mr-8 font-bold text-gray-800">Hassle-free Flight Bookings</h2>
          <p className="text-gray-700 mr-10 text-sm md:text-base">
            Say goodbye to the hassle of searching for the best flight deals.
            Our experienced travel consultants will help
            you find the most convenient and cost-effective flights to your destination.
          </p>
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
      <div className="w-full flex flex-col md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-gray-500">
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
          <h2 className="text-2xl ml-8 md:text-3xl font-bold text-white">Expert Advice</h2>
          <p className="text-white ml-8 text-sm md:text-base">
            Our team of experts will provide you with valuable information about
            preparing for life in your destination country, including cultural norms,
            local customs, and travel tips, ensuring that you arrive fully prepared.
          </p>
        </div>
      </div>


      {/* competitive rates */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-gray-100">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-2xl md:text-3xl mr-8 font-bold text-gray-800">Competitive Exchange Rates</h2>
          <p className="text-gray-700 mr-10 text-sm md:text-base">
            We work closely with trusted currency exchange partners to
            offer you competitive rates that beat those offered by
            banks and traditional currency exchange outlets.
            By leveraging our extensive network,
            we ensure that you get the most value for your money.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="src\assets\img\apex\exchange.png"
            alt="grp"
            className="w-full mt-4 h-[400px] md:h-[450px] object-cover rounded-xl shadow"
          />
        </div>
      </div>


      {/* Expert Advice */}
      <div className="w-full flex flex-col md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-gray-500">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="src/assets/img/apex/competitive.png"
            alt="grp"
            className="w-full mt-4 h-[400px] md:h-[450px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-2xl ml-8 md:text-3xl font-bold text-white">Transparent Pricing</h2>
          <p className="text-white ml-8 text-sm md:text-base">
            We believe in transparency, which is why we provide clear
            and concise information about exchange rates and fees upfront.
            With no hidden charges or surprises, you can confidently exchange currency.
          </p>
        </div>
      </div>


      <ImageWithTextAndButton
        bgImage="src\assets\img\apex\dark.png"
        heading="Welcome to Edu Fair"
        imgSrc="src/assets/img/models/boy.png"
      />




    </div>
  )
}

export default Forex

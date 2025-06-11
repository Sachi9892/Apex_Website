import React from 'react'
import ImageWithTextAndButton from '../../components/ImageWithTextAndButton'


function Accomodation() {

    

    return (

        <div className="w-full flex flex-col items-center space-y-8">


            {/* banner */}
            <div className="flex bg-gray-100 flex-col md:flex-row items-center w-full">
                <div className="w-full md:w-1/2">
                    <img
                        src="src\assets\img\apex\accom.jpg"
                        alt="GMAT Banner"
                        className="block w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
                    <h2 className="text-xl ml-16 md:text-2xl font-bold text-gray-800 mt-4 md:mt-0 mb-2 md:mb-4 text-center md:text-left">
                        <strong>Comfortable Living Solutions</strong>
                    </h2>
                    <p className="text-gray-700 ml-16 mb-4 md:mb-6 text-center md:text-left">
                        <strong>Find your home, away from home
                            With Apex Edutech </strong>
                    </p>
                </div>
            </div>


            {/* why apex */}
            <div className="w-full px-4 md:px-16 py-10 bg-white text-gray-800">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                    Accommodation At Its Best!
                </h2>

                {/* Intro Paragraph */}
                <p className="text-base md:text-lg mb-6 text-gray-700">
                    For accommodations, we provide the maximum support to our students and ensure their comfort and safety.
                </p>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-blue-50 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">The Apex Edutech Promise</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            For accommodations, we provide the maximum support to our students and ensure their comfort and safety.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-green-50 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-2 text-green-800">Perfect Homes</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            All our accommodations meet the highest safety and hygiene standards and offer an excellent living experience.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-yellow-50 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-2 text-yellow-800">Perfect Service</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Experience our world-class customer service available 24/7. Our customer service is unparalleled.
                        </p>
                    </div>
                </div>

                {/* Perfect Prices (moved outside the grid for full width) */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3 text-purple-800">Perfect Prices</h3>
                    <p className="mb-4 text-gray-700 text-sm md:text-base">
                        We offer the best accommodation deals, with the best prices across all our services.
                    </p>
                </div>
            </div>

            {/* steps */}
            <div className="w-full px-4 md:px-16 py-10 bg-gray-100 text-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-200 text-blue-800 font-bold flex items-center justify-center mx-auto mb-3">
                            01
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">Browse</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Discover hostels, dormitories and apartments in your dream destination from our large pool of fantastic options.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="w-10 h-10 rounded-full bg-green-200 text-green-800 font-bold flex items-center justify-center mx-auto mb-3">
                            02
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-green-800">Choose</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Narrow down your options using convenient filters and pick your ideal accommodation in minutes.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="w-10 h-10 rounded-full bg-purple-200 text-purple-800 font-bold flex items-center justify-center mx-auto mb-3">
                            03
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-purple-800">Book</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Select your ideal location and complete the paperwork. Make the payment and confirm – it happens all online.
                        </p>
                    </div>
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

export default Accomodation

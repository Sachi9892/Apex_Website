import React from 'react'

function Accomodation() {
    return (
        
        <div className="w-full flex flex-col items-center space-y-8">


            {/* Banner Section */}
            <div className="relative w-full h-[450px] md:h-[520px]">
                <img
                    src="src/assets/img/exams/others/immi.jpg"
                    alt="Immi Banner"
                    className="w-full h-full object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 md:px-12 w-full md:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        <strong>Welcome To Apex Consultant</strong>
                    </h2>
                    <p className="text-white mb-48 text-sm md:text-lg">
                        <strong>Trust Apex Consultancy expert mentors to equip you with the
                            knowledge and strategies you need to succeed.</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Accomodation

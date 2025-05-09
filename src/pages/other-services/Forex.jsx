import React from 'react'

function Forex() {
    return (
        <div className="w-full flex flex-col items-center space-y-8">

            {/* Banner Section */}
            <div className="relative w-full h-[500px] md:h-[550px]">
                <img
                    src="src\assets\img\apex\forex.png"
                    alt="Forex Banner"
                    className="w-full h-full object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 md:px-12 w-full md:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Seamless
                        Travel & Forex Assistance
                    </h2>
                </div>
            </div>


        </div>
    )
}

export default Forex

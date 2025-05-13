import { useState } from "react";
import RegisterForm from "./RegisterForm";

const ImageWithTextAndButton = ({ bgImage, heading, imgSrc }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {/* Banner */}
            <div
                className="flex mb-24 flex-col md:flex-row items-center w-full bg-gradient-to-r from-indigo-100 via-red-300 to-pink-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="w-full md:w-1/2">
                    <img
                        src={imgSrc}
                        alt="Banner Model"
                        className="block max-w-[300px] w-full h-auto object-contain mx-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
                    <h2 className="text-xl md:text-2xl font-bold text-white mt-4 md:mt-0 mb-2 md:mb-4 text-center md:text-left">
                        {heading}
                    </h2>
                    <button
                        onClick={() => setShowForm(true)}
                        className="mt-2 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
                    >
                        Contact Us!
                    </button>
                </div>
            </div>

            {/* Modal with Register Form */}
            {showForm && (
                <div className="fixed mb-3 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-1">
                    <div className="relative w-full max-w-2xl max-h-[100vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-4 md:p-6">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                        >
                            ✖
                        </button>

                        {/* ✅ Insert your existing form directly below */}
                        <div className="mt-8"> {/* space from close button */}
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default ImageWithTextAndButton;

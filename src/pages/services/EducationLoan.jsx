import React from 'react'
import { images } from '../../data/others/LoanPartner';
import ImageWithTextAndButton from '../../components/ImageWithTextAndButton';

function EducationLoan() {


    return (

        <div className="w-full flex flex-col items-center space-y-8">


            {/* Banner Section */}
            <div className="relative w-full h-[450px] md:h-[520px]">
                <img
                    src="src\assets\img\apex\edu-loan-banner.png"
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


            {/* why loan */}
            <div className="w-full px-4 md:px-16 py-10 bg-white text-gray-800">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                    Education Financing at your Doorstep
                </h2>

                {/* Intro Paragraph */}
                <p className="text-base md:text-lg mb-6 text-gray-700">
                    Explore loans from different vendors and choose the option that best suits your requirements without stepping out of your home.
                </p>

                {/* Why Collegepond */}
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Why Apex Edutech?</h3>
                <p className="mb-4 text-gray-700">
                    With Apex Edutech, you get the following benefits on education loans:
                </p>

                {/* Benefits List */}
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        <span className="font-medium text-blue-900">Lowest interest rates</span> (Can mention how much lower than average market rates), processing fee, and loan insurance requirements
                    </li>
                    <li>
                        Loan balance transfer across all loan vendors
                    </li>
                    <li>
                        Option to choose from <span className="font-medium text-blue-900">12 loan vendors</span> – both Indian and international
                    </li>
                    <li>
                        End-to-end hand-holding by a <span className="font-medium text-blue-900">dedicated in-house relationship manager</span>
                    </li>
                    <li>
                        Loan sanction <span className="font-medium text-blue-900">before</span> you receive admits from universities
                    </li>
                    <li>
                        Online loan application and document collection and at-home service for maximum convenience
                    </li>
                </ul>
            </div>


            {/* loan process from our end */}
            <div className="w-full px-4 md:px-16 py-10 space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
                    How our Loan Process Works
                </h1>

                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl ">
                    <div className="w-full md:w-1/3">
                        <img
                            src="src/assets/img/apex/step1.png"
                            alt="Step 1"
                            className="w-full h-[250px] object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Step 1: Tell us your Requirement</h2>
                        <p className="text-gray-700">
                            We will contact you to gather details such as amount of loan required, your academic profile and other details,
                            and let you know what documentation we will need in advance.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-none">
                    <div className="w-full md:w-2/3 flex flex-col space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Step 2: Hear from our Loan Partners</h2>
                        <p className="text-gray-700">
                            We will communicate your requirements to different loan providers that we have partnered with and arrange a
                            meeting with you and your parents at your home or our office – wherever convenient for you.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img
                            src="src/assets/img/apex/step2.png"
                            alt="Step 2"
                            className="w-full h-[250px] object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl ">
                    <div className="w-full md:w-1/3">
                        <img
                            src="src/assets/img/apex/step3.png"
                            alt="Step 3"
                            className="w-full h-[250px] object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Step 3: Get the Best Deal</h2>
                        <p className="text-gray-700">
                            We will advise you on the best loan offer among the different options that you are provided by our loan partners.
                            If needed, we will negotiate on your behalf.
                        </p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-none">
                    <div className="w-full md:w-2/3 flex flex-col space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Step 4: Post-Sanction Advice</h2>
                        <p className="text-gray-700">
                            We will remain available to you for follow-up on your disbursement requirements and any consultation required.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img
                            src="src/assets/img/apex/step4.png"
                            alt="Step 2"
                            className="w-full h-[250px] object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>


            {/* Partner Banks */}
            <div className="w-full overflow-hidden py-6 bg-white mb-12">
                <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                    Top Banks We Have Partnership!
                </h2>

                {/* Scrolling image strip */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-8 animate-marquee whitespace-nowrap">
                        {images.concat(images).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Bank ${index + 1}`}
                                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            
            {/* for loan apply */}
            <ImageWithTextAndButton
                bgImage="src\assets\img\apex\dark.png"
                heading="Welcome to Edu Fair"
                imgSrc="src/assets/img/models/boy.png"
            />




        </div>
    )
}

export default EducationLoan

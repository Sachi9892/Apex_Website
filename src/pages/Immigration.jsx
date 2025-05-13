import React from 'react'
import { services, steps } from '../data/others/ImmiData'
import RegisterForm from '../components/RegisterForm'

function Immigration() {
  return (
    <div className="w-full flex flex-col items-center space-y-8">

      {/* Banner Section */}
      <div className="relative w-full h-[500px] md:h-[550px]">
        <img
          src="src/assets/img/exams/others/immi.jpg"
          alt="Immi Banner"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 md:px-12 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Experience Immigration With Apex Educare
          </h2>
          <p className="text-white text-sm md:text-lg">
            Trust Apex Educare expert GMAT mentors to equip you with the
            knowledge and strategies you need to succeed. Thousands of GMAT aspirants have got their desired score with us.
          </p>
        </div>
      </div>


      {/* left content + right img */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center py-10 md:py-16 px-4 md:px-16 bg-white">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">The Best Immigration
            Consultants in Hyderabad</h2>
          <p className="text-gray-700 text-sm md:text-base">Many young Indians seek to establish themselves overseas,
            yet the journey of relocating to a foreign land can be overwhelming and challenging.
            Our experienced team of professionals guides you through every step,
            from understanding the intricacies of visa applications to ensuring
            compliance with immigration regulations. We have successfully counselled
            100,000+ clients across various levels and built a
            successful referral chain of clients adding to our brand value.
            We provide expert advice on job opportunities, residency pathways,
            and other crucial aspects. With our personalized approach,
            we streamline the process, minimize stress,
            and maximize your chances of successful immigration,
            helping you achieve your dreams of settling and succeeding abroad.</p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="src\assets\img\countries\others\image.png"
            alt="grp"
            className="w-full mt-4 h-[400px] md:h-[450px] object-cover rounded-xl shadow"
          />
        </div>
      </div>



      <div className="w-full py-12 bg-purple-500">
        <h2 className="text-3xl text-white font-bold text-center mb-10">Our Services</h2>

        <div className="grid gap-6 px-6 md:px-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-black transition duration-400"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>



      <div className="w-full py-12 px-6 md:px-16 bg-grey-600">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
          Discover How We Turn Your Immigration Dreams into Actionable Steps
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">{step.title}</h3>
              <p className="text-black text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>


      <RegisterForm />

    </div>
  )
}

export default Immigration

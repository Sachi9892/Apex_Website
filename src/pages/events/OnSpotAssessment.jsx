import { useNavigate } from "react-router-dom"; 

function OnSpotAssessment() {
  const navigate = useNavigate(); 

  const usEvent = {
    title: "Oregon State University Spot Assessment",
    date: "10th Mar 2025",
    time: "12:30 PM to 2 PM",
    location: "Apex Consultant , Vile Parle (E)",
    type: "In Person",
  };

  const ausEvent = {
    title: "Oregon State University Spot Assessment",
    date: "10th Mar 2025",
    time: "12:30 PM to 2 PM",
    location: "Apex Consultant , Vile Parle (E)",
    type: "In Person",
  };

  return (
    <div className="w-full text-gray-800">
      {/* Banner Section */}
      <div className="relative w-full h-[450px] md:h-[520px]">
        <img
          src="src/assets/img/apex/edu-loan-banner.png"
          alt="Immi Banner"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 md:px-12 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 mr-8">
            <strong>Welcome To Apex Educare</strong>
          </h2>
          <p className="text-black mb-28 mr-8 text-sm md:text-lg">
            <strong>Trust Apex Educare expert mentors to equip you with the
              knowledge and strategies you need to succeed.</strong>
          </p>
        </div>
      </div>

      <div className="px-4 md:px-16 py-10 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 text-center">
          Upcoming Events & Our Global Presence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* US Event Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="src/assets/img/events/apex-us.png"
              alt={`US Event`}
              className="w-full h-auto object-cover mb-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">{usEvent.title}</h3>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Date:</span> {usEvent.date}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Time:</span> {usEvent.time}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Location:</span> {usEvent.location}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <span className="font-semibold">Type:</span> {usEvent.type}
              </p>
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300 text-sm"
                onClick={() => navigate("/contact-us")}
              >
                Register
              </button>
            </div>
          </div>

          {/* AUS Event Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="src/assets/img/events/aus-apex.png"
              alt={`AUS Event`}
              className="w-full h-auto object-cover mb-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">{ausEvent.title}</h3>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Date:</span> {ausEvent.date}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Time:</span> {ausEvent.time}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Location:</span> {ausEvent.location}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <span className="font-semibold">Type:</span> {ausEvent.type}
              </p>
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300 text-sm"
                onClick={() => navigate("/contact-us")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnSpotAssessment;
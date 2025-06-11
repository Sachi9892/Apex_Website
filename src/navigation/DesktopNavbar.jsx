import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { countryLinks, examLinks } from "../data/NavLinks";

const DesktopNavbar = () => {
    const [showForeign, setShowForeign] = useState(false);
    const [showSmart, setShowSmart] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showEvents, setShowEvents] = useState(false);

    const foreignTimeoutRef = useRef(null);
    const smartTimeoutRef = useRef(null);
    const servicesTimeoutRef = useRef(null);
    const eventsTimeoutRef = useRef(null);

    const handleEnter = (setFn, timeoutRef) => {
        clearTimeout(timeoutRef.current);
        setFn(true);
    };

    const handleLeave = (setFn, timeoutRef) => {
        timeoutRef.current = setTimeout(() => {
            setFn(false);
        }, 100);
    };

    return (
        <div className="hidden md:flex space-x-6 text-gray-700 items-center relative z-50">


            {/* Foreign Education Dropdown */}
            <div
                className="relative"
                onMouseEnter={() => handleEnter(setShowForeign, foreignTimeoutRef)}
                onMouseLeave={() => handleLeave(setShowForeign, foreignTimeoutRef)}
            >
                <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span className="text-base font-medium">Foreign Education</span>
                    <ChevronDown size={16} />
                </button>
                {showForeign && (
                    <div className="absolute ml-46 mt-6 left-1/2 -translate-x-1/2 w-[60vw] bg-white shadow-md z-50 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {countryLinks.map(({ name, path, flag }) => (
                            <Link
                                key={path}
                                to={path}
                                onClick={() => setShowForeign(false)}
                                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-300"
                            >
                                {flag && <img src={flag} alt={name} className="w-12 h-12 border" />}
                                <span className="text-base font-medium">{name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>


            {/* Smart Learning Dropdown */}
            <div
                className="relative"
                onMouseEnter={() => handleEnter(setShowSmart, smartTimeoutRef)}
                onMouseLeave={() => handleLeave(setShowSmart, smartTimeoutRef)}
            >
                <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span className="text-base font-medium">Smart Learning</span>
                    <ChevronDown size={16} />
                </button>
                {showSmart && (
                    <div className="absolute mt-6 left-1/2 -translate-x-1/2 w-[50vw] bg-white shadow-md z-50 grid grid-cols-1 md:grid-cols-3 gap-3">
                        {examLinks.map(({ name, path, pic }) => (
                            <Link
                                key={path}
                                to={path}
                                onClick={() => setShowSmart(false)}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300"
                            >
                                {pic && <img src={pic} alt={name} className="w-12 h-12 rounded-sm" />}
                                <span>{name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>


            {/* Other Services Dropdown */}
            <div
                className="relative"
                onMouseEnter={() => handleEnter(setShowServices, servicesTimeoutRef)}
                onMouseLeave={() => handleLeave(setShowServices, servicesTimeoutRef)}
            >
                <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span className="text-base font-medium">Other Services</span>
                    <ChevronDown size={16} />
                </button>
                {showServices && (
                    <div className="absolute mt-6 left-1/2 -translate-x-1/2 w-[20vw] bg-white shadow-md z-50 grid grid-cols-1 gap-2">
                        {[
                            { name: "Accommodation", path: "/accommodation" },
                            { name: "Education Loan", path: "/education-loan" },
                            { name: "Forex", path: "/forex" },
                        ].map(({ name, path }) => (
                            <Link
                                key={path}
                                to={path}
                                onClick={() => setShowServices(false)}
                                className="px-4 py-2 hover:bg-gray-200"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>


            {/* Events Dropdown */}
            <div
                className="relative"
                onMouseEnter={() => handleEnter(setShowEvents, eventsTimeoutRef)}
                onMouseLeave={() => handleLeave(setShowEvents, eventsTimeoutRef)}
            >
                <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span className="text-base font-medium">Events</span>
                    <ChevronDown size={16} />
                </button>
                {showEvents && (
                    <div className="absolute mt-6 left-1/2 -translate-x-1/2 w-[20vw] bg-white shadow-md z-50 grid grid-cols-1 gap-2">
                        {[
                            { name: "Edu Fair", path: "/edu-fair" },
                            { name: "On Spot Assessment", path: "/on-spot-assessment" },
                        ].map(({ name, path }) => (
                            <Link
                                key={path}
                                to={path}
                                onClick={() => setShowEvents(false)}
                                className="px-4 py-2 hover:bg-gray-200"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>


            {/* Static Links */}
            {[
                { name: "Immigration", path: "/immigration" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact-Us", path: "/contact-us" },
            ].map(({ name, path }) => (
                <Link
                    key={path}
                    to={path}
                    className="text-base font-medium hover:text-blue-600"
                >
                    {name}
                </Link>
            ))}

        </div>
    );
};

export default DesktopNavbar;

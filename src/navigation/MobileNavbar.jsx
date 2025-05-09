import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { examLinks, countryLinks } from "../data/NavLinks";

const MobileNavbar = ({ isOpen, closeMenu }) => {
    const [foreignOpen, setForeignOpen] = useState(false);
    const [smartOpen, setSmartOpen] = useState(false);
    const [otherServicesOpen, setOtherServicesOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);

    if (!isOpen) return null;

    const otherServicesLinks = [
        { name: "Forex", path: "/other/forex" },
        { name: "Accommodation", path: "/other/accommodation" },
        { name: "Education Loan", path: "/other/education-loan" },
    ];

    const eventsLinks = [
        { name: "On spot Assessment", path: "/events/on-spot-assessment" },
        { name: "Edu Fair", path: "/events/edu-fair" },
    ];

    // Close everything after clicking
    const handleLinkClick = () => {
        setTimeout(() => {
            closeMenu(); // Collapse main mobile menu
            setForeignOpen(false); // Collapse submenus
            setSmartOpen(false);
            setOtherServicesOpen(false);
            setEventsOpen(false);
        }, 100); // Add small delay to feel natural
    };

    return (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700">
            {/* Foreign Education Dropdown */}
            <button onClick={() => setForeignOpen(!foreignOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">Foreign Education</span>
                <ChevronDown className={`${foreignOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {foreignOpen && (
                <div className="pl-4 py-2 bg-gray-50 rounded-md space-y-1 transition-all">
                    {countryLinks.map(({ name, path, flag }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-200"
                        >
                            {flag && <img src={flag} alt={name} className="w-10 h-10 rounded" />}
                            <span className="text-base">{name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Smart Learning Dropdown */}
            <button onClick={() => setSmartOpen(!smartOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">Smart Learning</span>
                <ChevronDown className={`${smartOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {smartOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {examLinks.map(({ name, path, pic }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                        >
                            {pic && <img src={pic} alt={name} className="w-8 h-8 rounded-sm" />}
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Other Services Dropdown */}
            <button onClick={() => setOtherServicesOpen(!otherServicesOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">Other Services</span>
                <ChevronDown className={`${otherServicesOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {otherServicesOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {otherServicesLinks.map(({ name, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            <span className="text-base">{name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Events Dropdown */}
            <button onClick={() => setEventsOpen(!eventsOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">Events</span>
                <ChevronDown className={`${eventsOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {eventsOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {eventsLinks.map(({ name, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            <span className="text-base">{name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Static Links (excluding Other Services and Events as they are in dropdowns now) */}
            {[
                { name: "Immigration", path: "/immigration" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact-Us", path: "/contact-us" },
            ].map(({ name, path }) => (
                <Link key={path} to={path} onClick={handleLinkClick}
                    className="block py-2 text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">
                    {name}
                </Link>
            ))}
        </div>
    );
};

export default MobileNavbar;
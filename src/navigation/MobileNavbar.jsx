import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { examLinks, countryLinks } from "../data/NavLinks";

const MobileNavbar = ({ isOpen, closeMenu }) => {
    const [foreignOpen, setForeignOpen] = useState(false);
    const [smartOpen, setSmartOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);

    if (!isOpen) return null;

    const handleLinkClick = () => {
        setTimeout(() => {
            closeMenu();
            setForeignOpen(false);
            setSmartOpen(false);
            setServicesOpen(false);
            setEventsOpen(false);
        }, 100);
    };

    return (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700">
            {/* Foreign Education Dropdown */}
            <button onClick={() => setForeignOpen(!foreignOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800">Foreign Education</span>
                <ChevronDown className={`${foreignOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {foreignOpen && (
                <div className="pl-4 py-2 bg-gray-50 rounded-md space-y-1">
                    {countryLinks.map(({ name, path, flag }) => (
                        <Link key={path} to={path} onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-red-200">
                            {flag && <img src={flag} alt={name} className="w-10 h-10 rounded" />}
                            <span className="text-base">{name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Smart Learning Dropdown */}
            <button onClick={() => setSmartOpen(!smartOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800">Smart Learning</span>
                <ChevronDown className={`${smartOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {smartOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {examLinks.map(({ name, path, pic }) => (
                        <Link key={path} to={path} onClick={handleLinkClick}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-red-200">
                            {pic && <img src={pic} alt={name} className="w-8 h-8 rounded-sm" />}
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Other Services Dropdown */}
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800">Other Services</span>
                <ChevronDown className={`${servicesOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {servicesOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {[
                        { name: "Accommodation", path: "/accommodation" },
                        { name: "Education Loan", path: "/education-loan" },
                        { name: "Forex", path: "/forex" },
                    ].map(({ name, path }) => (
                        <Link key={path} to={path} onClick={handleLinkClick}
                            className="block px-4 py-2 hover:bg-red-200">
                            {name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Events Dropdown */}
            <button onClick={() => setEventsOpen(!eventsOpen)} className="flex justify-between w-full hover:text-blue-600">
                <span className="text-base font-medium text-gray-800">Events</span>
                <ChevronDown className={`${eventsOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {eventsOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {[
                        { name: "Edu Fair", path: "/edu-fair" },
                        { name: "On Spot Assessment", path: "/on-spot-assessment" },
                    ].map(({ name, path }) => (
                        <Link key={path} to={path} onClick={handleLinkClick}
                            className="block px-4 py-2 hover:bg-red-200">
                            {name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Static Links */}
            {[
                { name: "Immigration", path: "/immigration" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact-Us", path: "/contact-us" },
            ].map(({ name, path }) => (
                <Link key={path} to={path} onClick={handleLinkClick}
                    className="block mb-4 text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">
                    {name}
                </Link>
            ))}
        </div>
    );
};

export default MobileNavbar;

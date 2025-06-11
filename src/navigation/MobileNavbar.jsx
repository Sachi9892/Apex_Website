import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { examLinks, countryLinks } from "../data/NavLinks";

const MobileNavbar = ({ isOpen, closeMenu }) => {
    const [foreignOpen, setForeignOpen] = useState(false);
    const [smartOpen, setSmartOpen] = useState(false);
<<<<<<< HEAD
    const [servicesOpen, setServicesOpen] = useState(false);
=======
    const [otherServicesOpen, setOtherServicesOpen] = useState(false);
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
    const [eventsOpen, setEventsOpen] = useState(false);

    if (!isOpen) return null;

<<<<<<< HEAD
    const handleLinkClick = () => {
        setTimeout(() => {
            closeMenu();
            setForeignOpen(false);
            setSmartOpen(false);
            setServicesOpen(false);
            setEventsOpen(false);
        }, 100);
=======
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
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
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
<<<<<<< HEAD
                        <Link key={path} to={path} onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-red-200">
=======
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-200"
                        >
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
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
<<<<<<< HEAD
                        <Link key={path} to={path} onClick={handleLinkClick}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-red-200">
=======
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                        >
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
                            {pic && <img src={pic} alt={name} className="w-8 h-8 rounded-sm" />}
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Other Services Dropdown */}
<<<<<<< HEAD
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
=======
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
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
                        </Link>
                    ))}
                </div>
            )}

            {/* Events Dropdown */}
            <button onClick={() => setEventsOpen(!eventsOpen)} className="flex justify-between w-full hover:text-blue-600">
<<<<<<< HEAD
                <span className="text-base font-medium text-gray-800">Events</span>
=======
                <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">Events</span>
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
                <ChevronDown className={`${eventsOpen ? "rotate-180" : ""} transition`} size={16} />
            </button>
            {eventsOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
<<<<<<< HEAD
                    {[
                        { name: "Edu Fair", path: "/edu-fair" },
                        { name: "On Spot Assessment", path: "/on-spot-assessment" },
                    ].map(({ name, path }) => (
                        <Link key={path} to={path} onClick={handleLinkClick}
                            className="block px-4 py-2 hover:bg-red-200">
                            {name}
=======
                    {eventsLinks.map(({ name, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 hover:bg-gray-200"
                        >
                            <span className="text-base">{name}</span>
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
                        </Link>
                    ))}
                </div>
            )}

<<<<<<< HEAD
            {/* Static Links */}
=======
            {/* Static Links (excluding Other Services and Events as they are in dropdowns now) */}
>>>>>>> 0e464d2cbbb82b2cb445f8d55881abdac576f83f
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
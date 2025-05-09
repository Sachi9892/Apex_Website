import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center ">
                    <Link to="/" className="w-full">
                        <img
                            src="src/assets/img/logo/apex.jpg"
                            alt="Apex Consultant Logo"
                            className="attachment-full size-full cursor-pointer"
                            style={{ width: "300px", height: "50px" }}
                        />
                    </Link>
                </div>


                <DesktopNavbar />

                {/* Mobile toggle button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <MobileNavbar isOpen={isOpen} closeMenu={closeMenu} />
            
        </nav>
    );
};

export default Navbar;

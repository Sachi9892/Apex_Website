import { Link } from "react-router-dom";
import { countryLinks , examLinks } from "../data/NavLinks";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 px-6 md:px-16 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
                {/* About */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Apex Consultant</h2>
                    <p className="text-sm text-gray-300">
                        Helping students with Study Abroad 
                        & Immigration journeys for over 23 years.
                    </p>
                </div>

                {/* Countries */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Study Destinations</h3>
                    <ul className="space-y-2 text-sm">
                        {countryLinks.slice(0, 9).map(({ name, path }) => (
                            <li key={path}>
                                <Link to={path} className="hover:underline text-gray-400">{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Exams */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Exams We Prepare</h3>
                    <ul className="space-y-2 text-sm">
                        {examLinks.slice(0, 5).map(({ name, path }) => (
                            <li key={path}>
                                <Link to={path} className="hover:underline text-gray-400">{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li>📍 Vile Parle (E), Mumbai, India</li>
                        <li>📞 +91 98765 43210</li>
                        <li>✉️ info@apexconsultant.com</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 pt-6">
                &copy; {new Date().getFullYear()} Apex Consultant. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

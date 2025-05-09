
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";

import Home from './pages/Home';
import About from "./pages/About";
import Blog from "./pages/Blog";
import EduFair from './pages/events/EduFair';
import OnSpotAssessment from './pages/events/OnSpotAssessment';
import Accommodation from './pages/other-services/Accommodation';
import EducationLoan from './pages/other-services/EducationLoan';
import Forex from './pages/other-services/Forex';

import Immigration from "./pages/Immigration";
import ContactUs from './pages/ContactUs';

import CountryStudyNavigation from './navigation/CountryStudyNavigation';
import smartLearningRoute from './navigation/SmartLearningNagivation';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* padding to avoid being hidden behind navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/other/forex" element={<Forex />} />
          <Route path="/other/accommodation" element={<Accommodation />} />
          <Route path="/other/education-loan" element={<EducationLoan />} />

          <Route path="/events/on-spot-assessment" element={<OnSpotAssessment />} />
          <Route path="/events/edu-fair" element={<EduFair />} />

          {CountryStudyNavigation}
          {smartLearningRoute}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App

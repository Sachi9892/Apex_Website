
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";

import Home from './pages/Home';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events"
// import ForeignEducation from "./pages/ForeignEducation";
import Immigration from "./pages/Immigration";
import OtherServices from "./pages/OtherServices";
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
          <Route path="/other" element={<OtherServices />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {CountryStudyNavigation}
          {smartLearningRoute}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App

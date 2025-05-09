
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";

import Home from './pages/Home';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Immigration from "./pages/Immigration";
import ContactUs from './pages/ContactUs';

import CountryStudyNavigation from './navigation/CountryStudyNavigation';
import smartLearningRoute from './navigation/SmartLearningNagivation';
import Footer from './components/Footer';
import otherServicesNavi from './navigation/OtherServicesNavigation';
import eventNavi from './navigation/EventsNavigation';


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
          {CountryStudyNavigation}
          {smartLearningRoute}
          {otherServicesNavi}
          {eventNavi}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App

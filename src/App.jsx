
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navbar";

import Home from './pages/Home';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events"
import ForeignEducation from "./pages/ForeignEducation";
import Immigration from "./pages/Immigration";
import OtherServices from "./pages/OtherServices";
import Register from "./pages/Register";
import SmartLearning from "./pages/SmartLearning";

import CountryStudyNavigation from './navigation/CountryStudyNavigation';
import smartLearningRoute from './navigation/SmartLearningNagivation';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* padding to avoid being hidden behind navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foreign" element={<ForeignEducation />} />
          <Route path="/smart" element={<SmartLearning />} />
          <Route path="/other" element={<OtherServices />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />

          {CountryStudyNavigation}
          {smartLearningRoute}
        </Routes>
      </div>
    </Router>
  );
}

export default App

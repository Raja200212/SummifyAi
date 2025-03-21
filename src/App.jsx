import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Summify from "./components/Summify";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Login from "./components/Login"; 
import ResForm from "./components/ResForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="h-full" style={{ background: "#030617" }}>
        <Header/>
        <div className="max-w-[85%] mx-auto py-[5em]">
        
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/summify.jsx" element={<Summify />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resForm" element={<ResForm />} />

          </Routes>
        </div>
      <Footer/>
      </div>
    </Router>
  );
};

export default App;

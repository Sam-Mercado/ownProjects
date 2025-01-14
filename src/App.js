import React from "react";
import './App.css';
import Navbar from "./Components/navBar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>      
    </div>
  );
}

export default App;

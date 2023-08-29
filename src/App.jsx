import {Routes, Route} from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Partner from "./routes/partner/Partner";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SubNav from "./components/subnav/SubNav";
import React from "react";

function App() {
  return (
    <>
      <SubNav/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/partner" element={<Partner/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
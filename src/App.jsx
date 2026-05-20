import Navbar from "./Navbar";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";



function App() {
  return (
    <div className="new">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/skill" element={<Skills/>} />
        </Routes>
      </BrowserRouter>


      <Home />
      <About />
      <Contact />
      <Project />
      <Skills />

    </div>
  );
};

export default App;
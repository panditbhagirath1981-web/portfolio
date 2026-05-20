import Navbar from "./src/Navbar";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/Home";
import About from "./src/About";
import Contact from "./src/Contact";
import Project from "./src/Project";
import Skills from "./src/Skills";



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
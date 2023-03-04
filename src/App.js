import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <Routes>
        {/*  <Navbar /> */}
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </main>
  );
}

export default App;

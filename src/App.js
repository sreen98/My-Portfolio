import "./App.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
import ContactInfo from "./components/ContactInfo";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
  );
}

export default App;

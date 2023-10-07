import "../styles/main.css";
import Home from "./main/Home";
import About from "./main/About";
import Projects from "./main/Projects";
import Contact from "./main/Contact";

export default function Main() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <img src="../../public/wave.svg" className="bg-[#f5f5f5]"></img>
      <Contact />
    </div>
  );
}

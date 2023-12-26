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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-[#f5f5f5]"
      >
        <path
          fill="#262634"
          fillOpacity="1"
          d="M0,64L120,101.3C240,139,480,213,720,213.3C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <Contact />
    </div>
  );
}

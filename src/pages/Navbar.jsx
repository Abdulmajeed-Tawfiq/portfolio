import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#161b2686] backdrop-blur border-b-2 border-[#00bcc1] fixed top-0 left-0 w-full text-white text-lg z-30 flex justify-center">
      <i
        onClick={toggleOpen}
        className={`fa-solid fa-bars absolute right-7 top-2.5 text-2xl cursor-pointer sm:hidden hover:text-[#00b8bd]`}
      ></i>
      <ul className="hidden sm:flex justify-start">
        <li className="py-2 px-6 ">
          <a
            href="#home"
            className="hover:text-[#e11b6c] transition-all duration-[400ms]"
          >
            HOME
          </a>
        </li>
        <li className="py-2 px-6 ">
          <a
            href="#about"
            className="hover:text-[#e11b6c] transition-all duration-[400ms]"
          >
            ABOUT
          </a>
        </li>
        <li className="py-2 px-6 ">
          <a
            href="#projects"
            className="hover:text-[#e11b6c] transition-all duration-[400ms]"
          >
            PROJECTS
          </a>
        </li>
        <li className="py-2 px-6 ">
          <a
            href="#contact"
            className="hover:text-[#e11b6c] transition-all duration-[400ms]"
          >
            CONTACT
          </a>
        </li>
      </ul>

      {isOpen ? (
        <ul className="grid justify-start mt-10 transition-transform transform duration-1000">
          <li className="py-2 px-6" onClick={toggleOpen}>
            <a
              href="#home"
              className="hover:text-[#e11b6c] transition-all duration-[400ms]"
            >
              HOME
            </a>
          </li>
          <li className="py-2 px-6" onClick={toggleOpen}>
            <a
              href="#about"
              className="hover:text-[#e11b6c] transition-all duration-[400ms]"
            >
              ABOUT
            </a>
          </li>
          <li className="py-2 px-6" onClick={toggleOpen}>
            <a
              href="#projects"
              className="hover:text-[#e11b6c] transition-all duration-[400ms]"
            >
              PROJECTS
            </a>
          </li>
          <li className="py-2 px-6" onClick={toggleOpen}>
            <a
              href="#contact"
              className="hover:text-[#e11b6c] transition-all duration-[400ms]"
            >
              CONTACT
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
}

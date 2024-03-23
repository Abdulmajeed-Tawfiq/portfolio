import {
  DevicesOutlined,
  LightbulbOutlined,
  RocketLaunchOutlined,
  SpeedOutlined,
} from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

import html from "/images/icons/html5.svg";
import css from "/images/icons/css-3.svg";
import bootstrap from "/images/icons/bootstrap.svg";
import tailwindcss from "/images/icons/tailwindcss.svg";
import git from "/images/icons/git.svg";
import github from "/images/icons/github.svg";
import react from "/images/icons/react.svg";
import redux from "/images/icons/redux.svg";
import nextjs from "/images/icons/next-js.svg";
import javaScript from "/images/icons/javaScript.svg";
import typeScript from "/images/icons/typeScript.svg";
import mysql from "/images/icons/mysql.svg";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // This will trigger as soon as 10% of the element is visible
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.4, // This will trigger when 40% of the element is visible
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.4, // This will trigger when 40% of the element is visible
  });

  const skills = [
    { name: "html", image: html },
    { name: "css", image: css },
    { name: "tailwindcss", image: tailwindcss },
    { name: "bootstrap", image: bootstrap },
    { name: "javaScript", image: javaScript },
    { name: "typeScript", image: typeScript },
    { name: "react", image: react },
    { name: "redux", image: redux },
    { name: "nextjs", image: nextjs },
    { name: "git", image: git },
    { name: "github", image: github },
    { name: "mysql", image: mysql },
  ];
  return (
    <section id="about" className="p-container">
      <p className="about-text">ABOUT</p>
      <div
        ref={ref1}
        className={`animatel ${inView1 ? "show" : ""} features-2`}
      >
        <div className="text">
          <p className="who-is">Who is Abdulmajeed?</p>
          <p className="about-me">
            I&apos;m a Front-End Developer I have serious passion for UI
            effects, animations and creating intuitive, dynamic user
            experiences.
            <br />
            <a href="#contact">Let&apos;s make something special.</a>
          </p>
        </div>
      </div>
      <div ref={ref2} className={`animater ${inView2 ? "show" : ""} features`}>
        <div className="feature">
          <SpeedOutlined className="text-white w-16 h-16 " />
          <h2>Fast</h2>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className="feature">
          <LightbulbOutlined className="text-white w-16 h-16 " />
          <h2>Intuitive</h2>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className="feature">
          <DevicesOutlined className="text-white w-16 h-16 " />
          <h2>Responsive</h2>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div className="feature">
          <RocketLaunchOutlined className="text-white w-16 h-16 " />
          <h2>Dynamic</h2>
          <p>
            Websites don&apos;t have to be static, I love making pages come to
            life.
          </p>
        </div>
      </div>

      <h2
        ref={ref3}
        className={`animatet ${
          inView3 ? "show" : ""
        } text-center text-[38px] mb-12`}
      >
        Skills
      </h2>
      <div
        className={` animatet ${
          inView3 ? "show" : ""
        } skills tn:grid-cols-2 grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 justify-items-center gap-4`}
        ref={ref3}
      >
        {skills.map((skill) => (
          <div
            className={`
              animatet ${inView3 ? "show" : ""}
              m-0 grid justify-center items-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40
              skill transform hover:scale-110 hover:shadow-lg hover:bg-slate-50 transition-transform duration-300 `}
            key={skill.name}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
            />
            <p className="m-auto">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

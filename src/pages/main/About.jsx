import { useInView } from "react-intersection-observer";

import html from "/images/icons/html.png";
import css from "/images/icons/css.png";
import sass from "/images/icons/sass.png";
import bootstrap from "/images/icons/bootstrap.png";
import tailwindcss from "/images/icons/tailwind.png";
import git from "/images/icons/git.png";
import wordpress from "/images/icons/wordpress.png";
import react from "/images/icons/react.png";
import nextjs from "/images/icons/nextjs2.png";
import javaScript from "/images/icons/javascript.png";
import typeScript from "/images/icons/typescript.png";
import mysql from "/images/icons/mysql.png";
import rocket from "/images/icons/rocket.png";
import bulb from "/images/icons/bulb.png";
import fire from "/images/icons/fire.png";
import thumbUp from "/images/icons/thumbUp.png";

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
    { name: "sass", image: sass },
    { name: "tailwindcss", image: tailwindcss },
    { name: "bootstrap", image: bootstrap },
    { name: "javaScript", image: javaScript },
    { name: "typeScript", image: typeScript },
    { name: "react", image: react },
    { name: "nextjs", image: nextjs },
    { name: "git", image: git },
    { name: "mysql", image: mysql },
    { name: "wordpress", image: wordpress },
  ];
  return (
    <section id="about" className="p-container">
      <p className="about-text">ABOUT</p>
      <div
        ref={ref1}
        className={`animatel ${inView1 ? "show" : ""} features-2`}
      >
        <div className="text">
          <p className="pb-2 text-4xl text-[#262634]">Who is Abdulmajeed?</p>
          <div className="about-me">
            <p className="mb-3">
              I&apos;m a Front-End Developer dedicated to transforming ideas
              into visually captivating and user-friendly experiences. With a
              keen eye for detail and a love for animation, I aim to create
              websites that not only look great but also feel intuitive.
            </p>
            <a href="#contact" className="text-[#00bec0]">
              Let&apos;s build something extraordinary together!
            </a>
          </div>
        </div>
      </div>
      <h2 className="mt-20 text-4xl text-[#262634] text-center">
        Why Collaborate With Me?
      </h2>
      <div
        ref={ref2}
        className={`animater ${inView2 ? "show" : ""} features text-center`}
      >
        <div className="feature ">
          <img src={rocket} alt="rocket" className="w-24 h-24 m-auto mb-4" />
          <div className="text">
            <h2 className="text-[24px] mb-2 text-[#00bec0] font-bold">
              Efficient Performance
            </h2>
            <p className="text-[#262634]">
              I strive for lightning-fast load times and seamless interactions,
              ensuring your users have the best experience possible, whether
              I&apos;m working independently or as part of a team.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={bulb} alt="rocket" className="w-24 h-24 m-auto mb-4" />
          <div className="text">
            <h2 className="text-[24px] mb-2 text-[#00bec0] font-bold">
              User-Focused Design
            </h2>
            <p className="text-[#262634]">
              My designs prioritize user experience, creating intuitive
              interfaces that guide users effortlessly, whether for a personal
              project or a corporate application.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={fire} alt="rocket" className="w-24 h-24 m-auto mb-4" />
          <div className="text">
            <h2 className="text-[24px] mb-2 text-[#00bec0] font-bold">
              Versatile Responsiveness
            </h2>
            <p className="text-[#262634]">
              My layouts adapt beautifully across all devices, ensuring a
              consistent experience whether I&apos;m freelancing or contributing
              to a company&apos;s vision.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={thumbUp} alt="rocket" className="w-24 h-24 m-auto mb-4" />
          <div className="text">
            <h2 className="text-[24px] mb-2 text-[#00bec0] font-bold">
              Dynamic Interactivity
            </h2>
            <p className="text-[#262634]">
              I specialize in creating engaging, animated experiences that make
              websites come alive, whether I&apos;m collaborating with clients
              or working in an in-house team.
            </p>
          </div>
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
              skill transform rounded-3xl transition-transform duration-500 `}
            key={skill.name}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-14 h-14 hover:scale-110 transition-transform duration-500 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 m-auto"
            />
            <p className="m-auto">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

import {
  DevicesOutlined,
  LightbulbOutlined,
  RocketLaunchOutlined,
  SpeedOutlined,
} from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

// import html from "../../../public/images/icons/html.svg";
// import css from "../../../public/images/icons/css.svg";
// import bootstrap from "../../../public/images/icons/bootstrap.svg";
// import tailwindcss from "../../../public/images/icons/tailwindcss.svg";
// import git from "../../../public/images/icons/git.svg";
// import github from "../../../public/images/icons/github.svg";
// import react from "../../../public/images/icons/react.svg";
// import redux from "../../../public/images/icons/redux.svg";
// import javaScript from "../../../public/images/icons/javaScript.svg";
// import typeScript from "../../../public/images/icons/typeScript.svg";
// import mysql from "../../../public/images/icons/mysql.svg";

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
    { name: "html", ratio: 90 },
    { name: "css", ratio: 90 },
    { name: "tailwindcss", ratio: 80 },
    { name: "bootstrap", ratio: 70 },
    { name: "javaScript", ratio: 80 },
    { name: "typeScript", ratio: 70 },
    { name: "react", ratio: 80 },
    { name: "redux", ratio: 70 },
    { name: "nextjs", ratio: 60 },
    { name: "git", ratio: 70 },
    { name: "github", ratio: 70 },
    { name: "mysql", ratio: 60 },
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

      <div
        className={`skills tn:grid-cols-2 grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 justify-items-center	`}
      >
        {/* add skills to the about page using skills array and map function */}
        {skills.map((skill) => (
          <div
            ref={ref3}
            className={`
            animatet ${inView3 ? "show" : ""}
            w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40
            skill tn:border-[6px] md:border-[8px] lg:border-[10px] border-red-500 rounded-[50%] border-hidden hover:border-solid`}
            key={skill.name}
          >
            <img
              src={`../../../public/images/icons/${skill.name}.svg`}
              alt={skill.name}
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

{
  /* <div className="skills">
        // add skills to the about page using skills array and map function
        {skills.map((skill) => (
          <div
            className="skill"
            key={skill.name}
            style={{
              backgroundImage: `linear-gradient(to right, #00c0c4 0% ${skill.ratio}%, #efefef ${skill.ratio}% 100%)`,
            }}
          >
            <p>{skill.name}</p>
            <p>{skill.ratio}%</p>
          </div>
        ))}
      </div> */
}
{
  /* <div className="skills">
        {skills.map((skill) => (
          <div
            className="circle"
            key={skill.name}
            style={{
              // background: "red",
              margin: "10px auto",
              padding: "10px",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              border: "solid 5px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderImage: `linear-gradient(to right, #00c0c4 0%, #00c0c4 ${skill.ratio}%, #efefef ${skill.ratio}%, #efefef 100%) 1`,
            }}
          >
            <p>{skill.name}</p>
          </div>
        ))}
      </div> */
}

import {
  DevicesOutlined,
  LightbulbOutlined,
  RocketLaunchOutlined,
  SpeedOutlined,
} from "@mui/icons-material";
export default function About() {
  return (
    <section id="about" className="p-container">
      <p className="about-text">ABOUT</p>
      <div className="features-2 ">
        <div className="text">
          <p className="who-is">Who is Abdulmajeed?</p>
          <p className="about-me">
            I&apos;m a Front-End Developer I have serious passion for UI
            effects, animations and creating intuitive, dynamic user
            experiences.
            <a href="#contact">Let&apos;s make something special.</a>
          </p>
        </div>
        <div className="skills">
          <div className=" skill">
            <p>HTML</p>
            <p>90%</p>
          </div>
          <div className=" skill">
            <p>css</p>
            <p>90%</p>
          </div>
          <div className=" skill">
            <p>Tailwind</p>
            <p>80%</p>
          </div>
          <div className=" skill">
            <p>JS</p>
            <p>80%</p>
          </div>
          <div className=" skill">
            <p>React</p>
            <p>80%</p>
          </div>
          <div className=" skill">
            <p>Python</p>
            <p>60%</p>
          </div>
          <div className=" skill">
            <p>SQL</p>
            <p>70%</p>
          </div>
          <div className=" skill">
            <p>Git & GitHub</p>
            <p>70%</p>
          </div>
        </div>
      </div>
      <div className="features">
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
    </section>
  );
}

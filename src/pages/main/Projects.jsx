import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // This will trigger as soon as 10% of the element is visible
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Abdulmajeed-Tawfiq/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((repo) => repo.homepage !== null);
        setProjects(filteredData);
      });
  }, []);

  return (
    <section id="projects">
      <p className="projects-text">PROJECTS</p>
      <div
        ref={ref}
        className={`animateb ${inView ? "show" : ""} projects p-container`}
      >
        {projects.map((project, index) => (
          <div key={index} className={`project flip-card`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {/* front content */}
                <img
                  src={project.description.split("(screenshot):")[1]}
                  alt="aaa"
                ></img>
              </div>
              <div className="flip-card-back">
                {/* back content */}
                <h2>{project.name}</h2>
                <ul className="techs">
                  {project.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <div className="buttons">
                  <a href={project.html_url} rel="noreferrer" target="_blank">
                    <li className="fab fa-github fa-lg mr-2"></li>{" "}
                    <div>code</div>
                  </a>
                  <a href={project.homepage} rel="noreferrer" target="_blank">
                    <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                    <div>visit</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

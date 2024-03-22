import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

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

  console.log(projects);

  return (
    <section id="projects">
      <p className="projects-text">PROJECTS</p>
      <div
        ref={ref}
        className={`animateb ${inView ? "show" : ""} projects p-container`}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="project xs:w-[250px] bg-[#1c1f2f] h-fit rounded-2xl min-h-[500px]"
            >
              <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] py-4 px-4 min-h-[280px] flex justify-evenly items-center flex-col">
                  <div className="relative w-full h-[230px]">
                    <img
                      src={project.description.split("(screenshot):")[1]}
                      alt="project-image"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-between m-2 card-img_hover">
                      <div
                        onClick={() => window.open(project.html_url, "_blank")}
                        className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src="../../../public/images/icons/github.svg"
                          alt="source code"
                          className="w-full h-full object-contain hover:scale-150"
                        />
                      </div>
                      <div
                        onClick={() => window.open(project.homepage, "_blank")}
                        className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src="../../../public/images/icons/link.svg"
                          alt="source code"
                          className="w-full h-full object-contain hover:scale-150"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text text-white text-center">
                    <h3 className="text-[20px] font-bold my-4">
                      {project.name}
                    </h3>
                    <p className="text-gray-400">
                      {project.description.split("(screenshot):")[0]}
                    </p>
                    <div className="techs flex">
                      {project.topics.map((tag, index) => (
                        <p key={index} className={`text-[14px] ${tag.color}`}>
                          #{tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

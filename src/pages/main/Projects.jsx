import { Image } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { projectsData } from "../../utils/projectsData";
import github from "/images/icons/github.svg";
import link from "/images/icons/link.svg";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // This will trigger as soon as 10% of the element is visible
  });

  const filters = ["All", "The Best", "CSS", "React", "nextjs"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "The Best") return project.isBest;
    return project.mainTech === filter;
  });

  return (
    <section id="projects">
      <p className="projects-text">PROJECTS</p>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filters.map((f) => (
          <motion.button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded ${
              filter === f
                ? "bg-[#00c5c3] text-white"
                : "bg-[#1c1f2f] text-gray-300 hover:bg-[#2a2f47]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {f}
          </motion.button>
        ))}
      </motion.div>
      <div
        ref={ref}
        className={`animateb ${inView ? "show" : ""} projects p-container`}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", "spring", project.id * 0.5, 0.75)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Tilt
              options={{
                max: 20,
                scale: 1,
                speed: 1000,
              }}
              className="xs:w-[250px] bg-[#1c1f2f] rounded-2xl min-h-[500px]"
            >
              <div className="w-full h-[230px] green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="relative w-full h-full">
                  <Image.PreviewGroup
                    preview={{
                      toolbarRender: () => null,
                      countRender: () => null,
                    }}
                  >
                    {project.image.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`project-image-${index + 1}`}
                        className="w-full object-cover rounded-2xl"
                        style={{
                          display: index === 0 ? "block" : "none",
                          height: 230,
                        }}
                      />
                    ))}
                  </Image.PreviewGroup>
                  <div className="absolute inset-0 flex justify-between m-2 h-0">
                    {project.github && (
                      <div
                        onClick={() => window.open(project.github, "_blank")}
                        className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src={github}
                          alt="source code"
                          className="w-full h-full object-contain hover:scale-150"
                        />
                      </div>
                    )}
                    {project.link && (
                      <div
                        onClick={() => window.open(project.link, "_blank")}
                        className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src={link}
                          alt="source code"
                          className="w-full h-full object-contain hover:scale-150"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="text text-white text-center">
                  <h3 className="text-[20px] font-bold my-4">{project.name}</h3>
                  <p className="text-gray-400 px-5">
                    {project.description.split("(screenshot):")[0]}
                  </p>
                  <div className="flex absolute bottom-6 left-6 gap-3 ">
                    {project.techs.map((tag, index) => (
                      <p key={index} className={`text-[14px] text-[#00c5c3]`}>
                        #{tag}
                      </p>
                    ))}
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

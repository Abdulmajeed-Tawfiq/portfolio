import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { projectsData } from "../../utils/projectsData";
import github from "/images/icons/github.svg";
import link from "/images/icons/link.svg";
import { Image } from "antd";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // This will trigger as soon as 10% of the element is visible
  });

  return (
    <section id="projects">
      <p className="projects-text">PROJECTS</p>
      <div
        ref={ref}
        className={`animateb ${inView ? "show" : ""} projects p-container`}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", "spring", project.id * 0.5, 0.75)}
            className="relative"
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 1000,
              }}
              className="xs:w-[250px] bg-[#1c1f2f] rounded-2xl min-h-[500px]"
            >
              <div className="  w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="relative w-full h ">
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
                        style={{ display: index === 0 ? "block" : "none" }}
                      />
                    ))}
                  </Image.PreviewGroup>
                  <div className="absolute inset-0 flex justify-between m-2 h-0">
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

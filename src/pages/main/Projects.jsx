import { useInView } from "react-intersection-observer";

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
        <div className={` project`}>
          <div className="details">
            <h2>Leon</h2>
            <p className="used-tech">HTML & CSS</p>
            <a
              href="https://abdulmajeed-tawfiq.github.io/html-css_-templet_1"
              rel="noreferrer"
              target="_blank"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="project">
          <div className="details">
            <h2>Kasper</h2>
            <p className="used-tech">HTML & CSS</p>
            <a
              href="https://abdulmajeed-tawfiq.github.io/html-css_-templet_2"
              rel="noreferrer"
              target="_blank"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="project">
          <div className="details">
            <h2>Meme generator</h2>
            <p className="used-tech">React JS</p>
            <a href="https://abdulmajeed-tawfiq.github.io/Meme-generator/">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

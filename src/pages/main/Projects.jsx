export default function Projects() {
  return (
    <section id="projects">
      <p className="projects-text">PROJECTS</p>

      <div className="projects p-container">
        <div className="project">
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

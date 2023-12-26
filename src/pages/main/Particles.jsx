import { useEffect } from "react";

// import Particles from "react-particles";
export default function Particlesjs() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      // Configure Particle.js after the script has loaded
      // eslint-disable-next-line no-undef
      particlesJS("particles-container", {
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: ["#00c7cc", "#f20063"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="particles-container"
      className="z-[2]"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    ></div>
  );
}

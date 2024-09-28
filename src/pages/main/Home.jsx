import { ArrowDownward, ArrowForward } from "@mui/icons-material";
import Particlesjs from "./Particles";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // This will trigger as soon as 10% of the element is visible
    delay: 0.9,
  });
  return (
    <section
      id="home"
      className={`text-white bg-[#262634] h-screen `}
      ref={ref}
    >
      <Particlesjs />
      <div className="w-full flex items-center justify-evenly px-10 h-full max-nlg:flex-col max-nlg:h-[85%] max-nlg:absolute max-nlg:bottom-0 max-sm:top-[10%]">
        <div className="z-10 grid gap-10">
          <div className={`animatel ${inView ? "show" : ""}`}>
            <p className="mb-3 text-center text-4xl text-[#e11b6c]">
              Abdulmajeed Tawfik
            </p>
            <p className="mb-8 text-center text-3xl"> Front-End developer</p>
          </div>
          <div className={` animater ${inView ? "show" : ""} buttons z-10`}>
            <div className="z-10 w-fit">
              <a
                href="https://drive.google.com/file/d/1VP7LGQxQSqsezAORAcaXCuM-a-I8MRft/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
                className=" flex justify-center w-fit mx-auto p-4 text-xl "
              >
                <p>Check My CV</p>
                <ArrowForward className=" arrow-icon text-white ml-2 mb-1 self-end text-xl" />
              </a>
            </div>
            <div className="z-10 w-fit">
              <a
                href="#projects"
                className=" flex justify-center w-fit mx-auto p-4 text-xl "
              >
                <p>View My Work</p>
                <ArrowDownward className=" arrow-icon text-white ml-2 mb-1 self-end text-xl" />
              </a>
            </div>
          </div>
        </div>
        <img src="/images/programmer.gif" className="z-10 max-nlg:h-[300px]" />
      </div>
    </section>
  );
}

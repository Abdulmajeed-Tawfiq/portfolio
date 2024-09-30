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
      <div className="w-full flex items-center justify-evenly px-10 h-full max-nlg:flex-col max-nlg:h-[90%] max-nlg:absolute max-nlg:bottom-0 max-sm:top-[10%]">
        <div className="z-10 grid gap-10 max-nlg:gap-2">
          <div className={`animatel ${inView ? "show" : ""}`}>
            <p className="mb-3 text-center text-4xl text-[#e11b6c]">
              Abdulmajeed Tawfik
            </p>
            <p className="mb-8 text-center text-3xl"> Front-End developer</p>
          </div>
          <div className={` animater ${inView ? "show" : ""} buttons z-10`}>
            <a
              href="https://drive.google.com/file/d/1VP7LGQxQSqsezAORAcaXCuM-a-I8MRft/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="z-10 w-fit bg-[#e11b6c] rounded-[20px] p-4 mx-auto shadow-xl shadow-slate-900 hover:scale-105"
            >
              <div className=" flex justify-center text-xl">
                <p>Check My CV</p>
                <ArrowForward className=" arrow-icon text-white ml-2 self-end text-xl" />
              </div>
            </a>
            <a
              href="#projects"
              className="z-10 w-fit bg-[#00b8bd] rounded-[20px] p-4 mx-auto shadow-xl shadow-slate-900 hover:scale-105"
            >
              <div className=" flex justify-center text-xl ">
                <p>View My Work</p>
                <ArrowDownward className=" arrow-icon text-white ml-2 mb-1 self-end text-xl" />
              </div>
            </a>
          </div>
        </div>
        <img
          src="/images/hero.png"
          className="floating-image z-10 w-[50%] opacity-90 max-nlg:h-[300px] max-md:w-full"
        />
      </div>
    </section>
  );
}

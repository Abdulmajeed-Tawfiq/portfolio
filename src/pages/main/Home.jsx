import { ArrowDownward, ArrowForward } from "@mui/icons-material";
import Particlesjs from "./Particles";
import avatar from "../../../public/images/avatar.png";

export default function home() {
  return (
    <section
      id="home"
      className="text-white bg-[#262634] grid items-center content-center justify-center h-screen "
    >
      <Particlesjs />
      <div>
        <p className="mb-3 text-center text-5xl text-[#e11b6c]">
          Abdulmajeed Tawfik
        </p>
        <p className="mb-8 text-center text-4xl"> Front-End developer</p>
      </div>
      <div className="buttons">
        <div className="z-10 w-fit">
          <a
            href="https://drive.google.com/file/d/1VP7LGQxQSqsezAORAcaXCuM-a-I8MRft/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className=" flex justify-center w-fit mx-auto p-4 text-2xl "
          >
            <p>Check My CV</p>
            <ArrowForward className=" arrow-icon text-white ml-2 mb-1 self-end text-xl" />
          </a>
        </div>
        <div className="z-10 w-fit">
          <a
            href="#projects"
            className=" flex justify-center w-fit mx-auto p-4 text-2xl "
          >
            <p>View My Work</p>
            <ArrowDownward className=" arrow-icon text-white ml-2 mb-1 self-end text-xl" />
          </a>
        </div>
      </div>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </section>
  );
}

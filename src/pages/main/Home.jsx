import { ArrowForward } from "@mui/icons-material";

export default function home() {
  return (
    <section
      id="home"
      className="text-white text-5xl bg-[#262634] grid items-center content-center justify-center h-screen "
    >
      <div className="">
        <p className="mb-3 text-center">
          Hello, I&apos;m
          <span className="text-[#e11b6c]"> Abdulmajeed Tawfik</span>
        </p>
        <p className="mb-8 text-center">I&apos;m a FrontEnd developer</p>
      </div>
      <a
        href="#projects"
        className=" flex justify-center w-fit mx-auto p-4 text-2xl "
      >
        <p>View my work</p>
        <ArrowForward className=" arrow-icon text-white ml-2 mb-1 self-end text-xl" />
      </a>
    </section>
  );
}

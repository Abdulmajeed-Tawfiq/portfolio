import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // This will trigger as soon as 10% of the element is visible
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pw2vwn6",
        "template_ciqekcf",
        form.current,
        "sOABhQNatpNqJDc_Y"
      )
      // .then(
      //   (result) => {
          // console.log(result.text);
      //   },
      //   (error) => {
          // console.log(error.text);
      //   }
      // );
    toast.success("Thanks for your message", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };

  return (
    <section className="contact p-container" id="contact">
      <p className="contact-text">CONTACT</p>
      <p
        ref={ref}
        className={`animatel ${
          inView ? "show" : ""
        } text-center text-lg text-[#0fbecc]`}
      >
        Have a question or want to work together?
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div ref={ref} className={`animater ${inView ? "show" : ""} `}>
          <input
            id="name"
            type="text"
            name="from_name"
            placeholder="Name"
            required
          />
          <input
            id="email"
            type="email"
            name="from_email"
            placeholder="E-mail"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          />
          <input type="submit" value="SUBMIT" className="cursor-pointer" />
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}

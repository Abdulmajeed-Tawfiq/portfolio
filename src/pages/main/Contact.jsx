import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* <img src="../../public/images/wave.svg" className="bg-[#f5f5f5]"></img> */}

      <section className="contact p-container" id="contact">
        <p className="contact-text">CONTACT</p>
        <p className="text-center text-lg text-[#0fbecc]">
          Have a question or want to work together?
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input id="name" type="text" name="from_name" placeholder="Name" />
          <input
            id="email"
            type="email"
            name="from_email"
            placeholder="E-mail"
          />
          <textarea id="message" name="message" placeholder="Message" />
          <input type="submit" value="SUBMIT" />
        </form>
      </section>
    </>
  );
}

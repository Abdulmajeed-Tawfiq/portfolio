export default function Footer() {
  return (
    <footer className="footer absolute">
      <a href="#home" className="relative top-[-70px]">
        <i className="fa-solid fa-angles-up back-top"></i>
      </a>
      <div className="social">
        <a
          href="https://linkedin.com/in/abdulmajeed-tawfik"
          title="linkedin"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Abdulmajeed-Tawfiq"
          title="github"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://t.me/Abdulmajeed234"
          title="telegram"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-telegram fa-lg"></i>
        </a>
        <a
          href="mailto:abdulmajeedtawfiq98@gmail.com"
          title="email"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-regular fa-envelope fa-lg"></i>
        </a>
      </div>
      <p className="text-white mt-10">
        Abdulmajeed Tawfik <span className="text-[#b3115b]">&copy; 2023</span>
      </p>
    </footer>
  );
}

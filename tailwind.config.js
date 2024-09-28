/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tn: "350px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        nlg: "1024px", // represent for normal large from tailwind
        xl: "1200px",
      },
    },
  },
  plugins: [],
};

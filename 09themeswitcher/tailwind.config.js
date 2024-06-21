/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // drak and light mode ki functionallity enable krny ky leye jo ky HTML sy aati h hmen tailwind mn aaik [mode] hota h jo hmen enable krna prta h jis ka name h [darkMode] ab is mn hm ko 2 properties milti hn

  //1)class or 2)media or 3)selector

  //ab hm ni chty ky jo hmra system h us ky bases py chly ya jo ky byDefault chlta h  ya

  //mn chata hn ky [class] ky base py chly ya is leye hm class use kr lean gy

  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

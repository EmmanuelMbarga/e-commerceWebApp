/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'portable':{"min":'320px', "max":'916px'},
      'tablette':{'min':'641px', 'max':'1024px'},
      'latop':{"min":"1025px","max":"1280px"},
      'destop':{"min":"1280px","max":"1536px"},
     
    },
    // backgroundImage:{
    //   "publogo":"url('./images/ImgPub/contactAssist.jpg')"
    // }
  },
  plugins: [],
}


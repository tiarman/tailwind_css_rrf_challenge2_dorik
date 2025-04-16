/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js}"],
    theme: {
      extend: {
        container: {
          center: true, // ✅ Container কে সেন্টার করবে
          padding: "1rem", // ✅ ছোট স্ক্রিনে ১rem প্যাডিং
          screens: {  
            sm: "600px",
            md: "728px",
            lg: "984px",
            xl: "1240px",
            "2xl": "1440px",
          },
        },
      },
    },
    plugins: [],
  };
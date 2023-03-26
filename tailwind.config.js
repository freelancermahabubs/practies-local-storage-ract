/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fafcb3",
        
"secondary": "#e8be94",
        
"accent": "#efc592",
        
"neutral": "#161221",
        
"base-100": "#FFFFFF",
        
"info": "#417BE6",
        
"success": "#156F68",
        
"warning": "#E3B10D",
        
"error": "#E13737",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      
      colors: {
        // 'primary': '#1BAE70',
        'primary': '#141736',
        'primary15%': '#DDF3EA',
        'shapeColor': '#272951',
        'lightBlue': '#0177FB',
        'icon-color': '#A5B4CB',
        'stockColor':'#DFE5F1',
      },
      spacing: { 
        '2.7': '0.7rem',
       },
       dropShadow: {
        'cardShadow': '0 2px 6px rgba(27, 174, 112, 0.2)',
        'primeShadow': '2px 2px 6px rgba(27, 174, 112, 0.3)',
      },
      
    },
  },
  plugins: [],
}


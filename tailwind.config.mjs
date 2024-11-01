/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          5: "#00D6FB",
          10: "#004E69",
          DEFAULT: "#E78895",
        },
        success: {
          5: "#F5FBF4",
          10: "#DDF1DA",
          25: "#C6E8C1",
          45: "#B0E0A9",
          65: "#9AD791",
          85: "#83CE78",
          DEFAULT: "#6DC560",
        },
        warning: {
          5: "#FFF3EC",
          10: "#FFDECC",
          25: "#FFCDB1",
          45: "#FFBC97",
          65: "#FFAB7C",
          85: "#FF9A62",
          DEFAULT: "#FF8947",
        },
        danger: {
          5: "#FFF5F5",
          10: "#FBD0D0",
          25: "#F9B4B4",
          45: "#F69898",
          65: "#F47C7C",
          85: "#F16060",
          DEFAULT: "#EF4444",
        },
        // 'yellow': '#6863FB',
        buttons: {
          5: "#00D6FB",
          10: "#004E69",
          DEFAULT: "",
        },
        text: {
          5: "#E4E4E4",
          10: "#C7C7C7",
          15: "#ECECEC",
          25: "#878787",
          45: "#646464",
          65: "#4F4F4F",
          85: "#363636",
          DEFAULT: "#979797",
        },
      },
    },
  },
  plugins: [],
};

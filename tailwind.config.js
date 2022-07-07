/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
        extend: {
            colors: {
                primary: "#00acdc",
                secondary: "#2c3e50",
            },
        },
    },
    plugins: [],
};

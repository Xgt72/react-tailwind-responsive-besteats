/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                green: {
                    400: "#00df9a",
                },
                black: "#000300",
            },
        },
    },
    plugins: [],
};

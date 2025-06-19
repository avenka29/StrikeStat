/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['"Rubik Mono One"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
        "./index.html",  // Add this line if your index.html is in project root
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['"Rubik Mono One"', 'sans-serif'],
                cursive: ['"Cedarville Cursive"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

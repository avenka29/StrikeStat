import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikMonoOne: ['"Rubik Mono One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

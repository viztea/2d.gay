/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "src/**/*.{svelte,html,js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            }
        },
    },
    plugins: [
        require("@tailwindcss/typography")
    ],
}

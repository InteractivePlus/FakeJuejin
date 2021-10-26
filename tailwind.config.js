
const colors = require('tailwindcss/colors')


module.exports = {
    mode: "jit",
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // Build your palette here
                transparent: "transparent",
                juejinbg: "#f4f5f5",
                juejinnav: "#86909c",
                juejinactive: "#1e80ff",
                "juejin-focus-btn": "#6cbd45",
                "juejin-focus-text-blue": "#007fff",
            },
        },

        fontFamily: {
            juejin: [
                "-apple-system",
                "system-ui",
                "Segoe UI",
                "Roboto",
                "Ubuntu",
                "Cantarell",
                "Noto Sans",
                "sans-serif",
                "BlinkMacSystemFont",
                "Helvetica Neue",
                "PingFang SC",
                "Hiragino Sans GB",
                "Microsoft YaHei",
                "Arial",
            ],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

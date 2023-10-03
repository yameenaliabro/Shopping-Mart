import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    screens: {
        "2xs": "375px",
        "1xs": "480px",
        xs: "560px",
        sm1: "600px",
        md1: "769px",
        preferencemd: "820px",
        "2md": "860px",
        lg1: "1000px",
        xl1: "1281px",
        "2xl1": "1640px",
        "3xl1": "1920px",
        "5xl": "3420px",
    },
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
    important: true,
};
export default config;

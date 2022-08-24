/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lexend: ["Lexend"],
			},
			backgroundImage: {
				arrow: "url('/chevron.png')",
			},
			acm: {
				blue: "#82aaff",
				lightpurple: "#c792ea",
				yellow: "#ffd700",
				green: "#c3e88d",
				red: "#ff5370",
				gray: "#8f93a2",
				pink: "#f07178",
				lightblue: "#89ddff",
				darkgray: "#525975",
				orange: "#f78c6c",
				marine: "#80cbc4",
				purple: "#da70d6",
				white: "#ffffff",
				black: "#000000",
			},
			backgroundColor: theme => theme("acm"),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};

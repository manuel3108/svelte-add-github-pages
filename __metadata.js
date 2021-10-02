export const name = "Github Pages";

/** @typedef {{ dirToPublish: string, customDomain: string }} Options */

/** @type {import("../..").AdderOptions<Options>} */
export const options = {
	dirToPublish: {
		context: "",
		question: "Which directory do you want to publish?",
		default: "build",
	},
	customDomain: {
		context: "Leave empty for default Github scheme http://username.github.io/repository",
		question: "Which domain do you want to publish to?",
		default: "",
	},
};

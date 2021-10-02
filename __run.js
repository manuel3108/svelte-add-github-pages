import { addSvelteAdapter } from "../../adder-tools.js";
import colors from "kleur";

/** @type {import("../..").AdderRun<import("./__metadata.js").Options>} */
export const run = async ({ folderInfo, options, install, updateJavaScript, updateFile }) => {
	const packageName = `@sveltejs/adapter-static`;

	await addSvelteAdapter({ packageName, folderInfo, updateJavaScript });

	await updateFile({
		path: "/.github/workflows/deploy.yml",
		content: async () => {
			const content = getWorkflowContent(options);

			return {
				text: content,
			};
		},
	});

	await install({ package: packageName });

	console.log("⚠ " + colors.yellow("Don't forget to enable github pages in the settings of your repository (see readme)!"));
};

/** @param {import("./__metadata.js").Options} options*/
const getWorkflowContent = (options) => {
	const content = `name: deploy

# Controls when the action will run. Triggers the workflow on push or pull request events but only for the master branch
on:
	push:
		branches: [master]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
	# This workflow contains a single job called "build"
	build:
		# The type of runner that the job will run on
		runs-on: ubuntu-latest

		# Steps represent a sequence of tasks that will be executed as part of the job
		steps:
			# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
			- uses: actions/checkout@v2

			- name: install dependencies
				run: npm install

			- name: build
				run: npm run build
				
			- name: Deploy to GitHub pages
				uses: peaceiris/actions-gh-pages@v3
				with:
					github_token: \${{ secrets.GITHUB_TOKEN }}
					publish_dir: ${options.dirToPublish}
					${options.customDomain ? "cname: " + options.customDomain : ""}`;

	// github does not accept yml files formatted with tabs, so replace tabs with 2 spaces
	return content.replace(/\t/g, "  ");
};

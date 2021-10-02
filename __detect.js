/**
 * @type {import("../..").Heuristic[]}
 */
export const heuristics = [
	{
		description: "`@sveltejs/adapter-static` is installed",
		async detector({ folderInfo }) {
			return "@sveltejs/adapter-static" in folderInfo.allDependencies;
		},
	},
	{
		description: "`.github/workflows/deploy.yml` exists",
		async detector({ readFile }) {
			const { exists } = await readFile({ path: "/.github/workflows/deploy.yml" });
			return exists;
		},
	},
];

import { Configuration } from "webpack";

/** @public */
const config: Configuration = {
	// TODO: entry
	resolve: {
		extensions: [ ".js", ".ts", ".tsx" ],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
		],
	},
	// TODO: plugins
	// TODO: optimization
	// TODO: output
};

export default config;

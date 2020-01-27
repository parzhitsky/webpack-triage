import { smart as extend } from "webpack-merge";

/** @public */
const extendBase = extend.bind(null, {
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
});

export default extendBase;

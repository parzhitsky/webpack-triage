import extendBase from "./extend-base";

/** @public */
const config = extendBase({
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "dist",
	},
});

export default config;

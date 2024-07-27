const path = require('path')
const p = path.join(__dirname, "src/ts/");

module.exports = {
    entry: {
        app: [`${p}index.ts`, `${p}typing.ts`],
        firebase: `${p}firebase.ts`,
        menu: [`${p}sidebar.ts`, `${p}header.ts`],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "js"),
    },
};

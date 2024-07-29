const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const p = path.resolve(__dirname, "src/ts/");

const files = ['index', 'typing', 'settings', 'sidebar', 'header', 'firebase']
const entries = {}
for (const fn of files) {
    entries.entry[fn] = path.resolve(__dirname, 'src/ts', `${fn}.ts`)
}

const config = {
    module: {
        entry: entries,
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/html/index.html")
        }),
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "src/js"),
    },
};
module.exports = config
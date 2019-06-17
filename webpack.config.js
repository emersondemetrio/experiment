const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.jsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}, {
				test: /\.scss$/,
				use: [
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			}, {
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	resolve: {
		extensions: [
			'*',
			'.js',
			'.jsx'
		]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/dist',
		hot: true,
		watchContentBase: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
};

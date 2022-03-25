const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		// lodash: './src/lodash.js',
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		// 此处可以自定义其他格式
		chunkFilename: '[name].[id].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, "./src/modules/**/"),
				use: [
					{
						loader: "bundle-loader",
						options: {
							lazy: true,
							name: '[name]'
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}, {
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'images/',
						limit: 10240
					}
				}
			}, {
				test: /\.(eot|ttf|svg)$/,
				use: {
					loader: 'file-loader'
				}
			}, {
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'sass-loader',
					'postcss-loader'
				]
			}, {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	// 代码分割
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	}
}
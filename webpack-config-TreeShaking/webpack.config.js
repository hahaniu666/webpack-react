const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	// mode: 'production',
	entry: {
		main: './src/index.js',
	},
	devtool: 'cheap-module-eval-source-map',
	// devtool: 'cheap-module-source-map',
	devServer: {
		// 服务器根路径
		contentBase: './dist',
		open: true,
		port: 8888,
		hot: true,
		hotOnly: true,
		proxy: {
			'/api': 'http://localhost:3000/',
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						// 占位符 https://webpack.js.org/loaders/file-loader/
						name: '[name]_[hash].[ext]',
						outputPath: 'img/',
						limit: 10240  // 超过10240，使用file-loader
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(eot|ttf|svg|woff)$/,
				use: {
					loader: 'file-loader'
				}
			}

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new CleanWebpackPlugin({
			dry: false,
			verbose: true,
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		usedExports: true,
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	}
}
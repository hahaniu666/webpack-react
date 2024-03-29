const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',
		// sub: './src/index.js'
	},
	devtool: 'cheap-module-eval-source-map',
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
				// 可以放在根目录.babelrc文件里
				// options: {
				//	// 业务代码
				// 	"presets": [
				// 		[
				// 			"@babel/preset-env",
				// 			{
				// 				"targets": {
				// 					"edge": "17",
				// 					"firefox": "60",
				// 					"chrome": "67",
				// 					"safari": "11.1",
				// 				},
				// 				useBuiltIns: 'usage'
				// 			}
				// 		]
				// 	]
				//  // 库代码
				// 	// "plugins": [
				// 	// 	[
				// 	// 		"@babel/plugin-transform-runtime",
				// 	// 		{
				// 	// 			"absoluteRuntime": false,
				// 	// 			"corejs": 2,
				// 	// 			"helpers": true,
				// 	// 			"regenerator": true,
				// 	// 			"useESModules": false,
				// 	// 		}
				// 	// 	]
				// 	// ]
				// }
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
			// {
			// 	test: /\.(css|scss)$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'sass-loader',
			// 		'postcss-loader'
			// 	]
			// },
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
			// {
			// 	test: /\.(css|scss)$/,
			// 	use: [
			// 		'style-loader', 
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				importLoaders: 2,
			// 				// modules: true,
			// 			}
			// 		},
			// 		'sass-loader',
			// 		'postcss-loader'
			// 	]
			// },
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
	// output: {
	// 	filename: '[name].js',
	// 	path: path.resolve(__dirname, 'dist'),
	// 	// publicPath: 'https:www.cdn.com'
	// }
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
}
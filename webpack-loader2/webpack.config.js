const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		// rules: [{
		// 	test: /\.(jpg|png|gif)$/,
		// 	use: {
		// 		loader: 'file-loader',
		// 		options: {
		// 			// 占位符 https://webpack.js.org/loaders/file-loader/
		// 			name: '[name]_[hash].[ext]',
		// 			outputPath: 'img',
		// 		}
		// 	} 
		// }]
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					// 占位符 https://webpack.js.org/loaders/file-loader/
					name: '[name]_[hash].[ext]',
					outputPath: 'img/',
					// limit: 10240
				}
			} 
		}]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
}
const path = require('path');
module.exports = {
	mode: "production",
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			// {
			// 	test: /\.js/,
			// 	use: [path.resolve(__dirname, './loaders/replactLoader.js')]
			// }
			{
				loader : path.resolve(__dirname, './loaders/loaderI18N.js'),
				options: {
					name: 'feng',
				}
			}
		]
	}
}
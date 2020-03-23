const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, './dist')
    },
    module: {
		rules: [{ 
			test: /\.js?$/, 
			include: path.resolve(__dirname, './src'),
			use: [{
				loader: 'babel-loader'
			}]
		}]
	},
}
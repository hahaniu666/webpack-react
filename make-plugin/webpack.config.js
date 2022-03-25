const path = require('path');
const CopyRightWebpackPlugin = require('./plugins/copyright-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	plugins: [
		new CopyRightWebpackPlugin({
			name: 'my name is mu feng'
		})
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	}
}
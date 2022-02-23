const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		bundle: { import: ['./src/index.js', './src/pagina.js'] }
	},
	output: {
		clean: true,
		filename: './js/[name].min.js',
		path: path.resolve(__dirname, 'build/'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	optimization: {},
	plugins: [],
}

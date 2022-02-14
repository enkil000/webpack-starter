const path = require('path')

module.exports = {
	mode: 'production',
	output: {
		filename: './js/app.js',
		path: path.resolve(__dirname, 'dist'),
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

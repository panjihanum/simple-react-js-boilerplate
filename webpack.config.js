const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader'
                },
            },{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}
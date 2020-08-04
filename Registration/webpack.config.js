const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        module:'src/registration.module.js',
    },
    output: {
        filename: 'registration.[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase:'./dist',
    },
    plugins: [
        // new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    }
};
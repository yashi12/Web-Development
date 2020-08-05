const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        confirmPassword: './src/registrationDirectives/confirmPassword.directive.js',
        contentEditable: './src/registrationDirectives/contentEditable.directive.js',
        enrollNumber: './src/registrationDirectives/enrollNumber.directive.js',
        fileSize: './src/registrationDirectives/fileSize.directive.js',
        overwriteEmail: './src/registrationDirectives/overwriteEmail.directive.js',
        password: './src/registrationDirectives/password.directive.js'
    },
    output: {
        filename: '[name].directive.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        // new HtmlWebpackPlugin(),
        // new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    }
};
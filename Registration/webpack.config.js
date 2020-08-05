const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        confirmPasswordDirective: './src/registrationDirectives/confirmPassword.directive.js',
        contentEditableDirective: './src/registrationDirectives/contentEditable.directive.js',
        enrollNumberDirective: './src/registrationDirectives/enrollNumber.directive.js',
        fileSizeDirective: './src/registrationDirectives/fileSize.directive.js',
        overwriteEmailDirective: './src/registrationDirectives/overwriteEmail.directive.js',
        passwordDirective: './src/registrationDirectives/password.directive.js',
        // registrationController:'./src/registration.controller.js'

    },
    output: {
        filename: '[name].bundle.js',
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
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use:[
                    'file-loader',
                ],
            },
        ],
    }
};
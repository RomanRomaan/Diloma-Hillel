// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/Hillel-HW-26.1/',   // ← ВАЖНО: один ведущий слэш, без двойного
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
                }
            },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        ],
    },
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
    devtool: 'source-map',
};

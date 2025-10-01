// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'client'),
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CssPlugin({
            filename: 'styles[fullhash].css'
        }),
        new CopyPlugin({
            patterns: [{ from: './src/db.json', to: './' }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
                }
            },
            {
                test: /\.css$/i,
                use: [CssPlugin.loader, 'css-loader']
            }
        ]
    },
    devServer: {
        port: 5500,
        static: {
            directory: path.join(__dirname, 'client')
        },
        devMiddleware: {
            writeToDisk: true
        },
        open: true,
        historyApiFallback: true
    }
};

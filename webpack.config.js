// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'client'),
        filename: 'bundle.js',
        clean: true
    },
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
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
        ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    devtool: 'source-map',

    // как на скрине:
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

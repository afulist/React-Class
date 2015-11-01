var webpack = require('webpack');
var Path = require('path');
module.exports = {
    entry: ["./main.js"],
    output: {
        path: Path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: [/node_modules/]
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    devtool: '#sourcemap',
    devServer: {
        contentBase: Path.resolve(__dirname, "./"),
        filename: '[name].js',
        publicPath: '/',
        inline: true,
        quiet: true,
        noInfo: true,
        lazy: false,
        stats: {
            colors: true,
            cached: false,
            cachedAssets: false
        }
    }
};

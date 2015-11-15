var webpack = require('webpack');
var Path = require('path');
module.exports = {
    entry: ["./app/js/boot.jsx"],
    output: {
        path: Path.resolve(__dirname, './build/'),
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
        contentBase: Path.resolve(__dirname, "./build/"),
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

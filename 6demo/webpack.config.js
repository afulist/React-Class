var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');
module.exports = {
    entry: ["./boot.jsx"],
    output: {
        path: Path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: [/node_modules/]
        },{
            test: /.scss/,
            loader: ExtractTextPlugin.extract('style','css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.NoErrorsPlugin()
    ],
    devtool: '#sourcemap',
    devServer: {
        contentBase: Path.resolve(__dirname, "./"),
        filename: 'bundle.js',
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

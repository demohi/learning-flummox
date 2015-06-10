/**
 * web - webpack.config.js
 * Created by mengdesen on 15/4/15.
 */

'use strict';

var webpack = require('webpack');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/, loaders: ['babel-loader?optional[]=runtime&stage=0'],
                exclude: /node_modules/
            },
            {
                test: /\.json?$/, loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin(),
        new webpack.ProvidePlugin({
            babelHelpers: "babel/external-helpers"
        })
    ]
};

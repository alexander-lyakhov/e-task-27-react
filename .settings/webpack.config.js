'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';

var modules = require('./webpack.modules.js');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
var path = require('path');

var projectName = 'e-task-27-react';
var projectPath = path.resolve(__dirname, projectName);

module.exports = {

    context: projectPath,

    //=======================================================================================================
    //  For cases when we should copy 'index.html' file into 'dist' directory
    //=======================================================================================================
    /*
    entry: [
        './index-template.html',
        './src/main.js'
    ],
    */

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(projectPath, 'dist'),
        filename: 'build.js'
    },

    //=======================================================================================================
    //  Watch for changes in development mode only
    //=======================================================================================================
    watch: NODE_ENV === 'development',

    //=======================================================================================================
    //  Make source-map enabled in development mode only
    //=======================================================================================================
    devtool: NODE_ENV === 'development' ? 'source-map':false,

    //=======================================================================================================
    //  Set server path to project folder
    //=======================================================================================================
    devServer: {
        contentBase: projectPath
    },

    module: modules(projectPath),

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("build.css", {allChunks: true})
   ]
};

if (process.env.NODE_ENV === 'production') {

    module.exports.plugins = (module.exports.plugins || []).concat([
        new UglifyJSWebpackPlugin({
            sourceMap: false,
        })
    ])
}
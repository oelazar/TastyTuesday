const commonConfig = require('./webpack.common.js')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = webpackMerge(commonConfig.module, {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({names: ['vendor'], filename: '[name].js'})
    ]
})
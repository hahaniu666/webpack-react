const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
// webpack编译器，webpack下的node api，结合某个文件进行代码编译
const complier = webpack(config);

const app = express();


app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath,
}))

app.listen(3000,() => {
    console.log('server is running')
})
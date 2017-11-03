const path = require("path");
//const http = require("http");
const express = require("express");
const app = express();
const webpack_config = require("./webpack.config.dev.js");
const webpack = require("webpack");
const format_time = (d) => { //格式化日期  2017-8-15 15:13:11
	let times = new Date(d);
	return times.getFullYear() + "-" + ( times.getMonth() + 1 ) + "-" + times.getDate() + " " + times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
}


var WebpackDevServer = require("webpack-dev-server");
var webpackHotMiddleware = require('webpack-hot-middleware');
const webp = webpack(webpack_config);

var server = new WebpackDevServer(webp, {
    stats: {
        colors: true
    },
    contentBase: "./src",
    inline: true,
    progress: true,
    host: "59.110.241.83",
    disableHostCheck: true,
    // historyApiFallback: {
    //     index: "./index.html"
    // },
    proxy: {
        "/v1": {
            target: "http://localhost:5000/",
            changeOrigin: true
        }
    }
});
app.use(webpackHotMiddleware(webp));
server.listen(8089);

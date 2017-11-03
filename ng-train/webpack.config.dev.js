const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const HtmlwebpackPlugin =  require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
// const CopyWebpackPlugin = require("copy-webpack-plugin")
var baseUrl = "localhost:8089";
if(process.argv[2] == "dev"){
    baseUrl = "localhost:8089";
}else if(process.argv[2] == "test"){
    baseUrl = "59.110.241.83:8089"
}
console.log(baseUrl);
const publicPath = `http://${ baseUrl }/`;
const hotMiddlewareScript = `webpack-dev-server/client?http://${ baseUrl }/`;
module.exports = {
   devtool: 'eval-source-map',
    entry: {
        // hotMiddlewareScript,
        // "webpack/hot/dev-server",
        "bundle": [ "./src/app.js" , hotMiddlewareScript, "webpack/hot/dev-server", ],
        "vendor": [ "angular", "angular-ui-router/release/angular-ui-router.min.js" ]
    },
    output: {
        path: BUILD_PATH,
        filename: "js/[name]-[hash:5].min.js",
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-0"],
                        "plugins": ["transform-decorators-legacy"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader?root=/&attrs=img:src img:data-src link:href div:ng-include",
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback:"style-loader", use: "css-loader!postcss-loader"})
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({fallback:"style-loader", use: "css-loader!postcss-loader!sass-loader"})
            },
            {
                test: /\.(png|jpg|woff|svg|eot|ttf|gif)$/,
                use: 'url-loader?limit=40000&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src/")
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "js/vendor-[hash:5].min.js" }),
        new ExtractTextPlugin("css/ng-train-[hash:5].css"),  //单独打包css
        new webpack.DefinePlugin({
            "process_env": {
                NODE_ENV: JSON.stringify("dev")
            }
        }),
        new HtmlwebpackPlugin({
            filename: "index.html",
            template: path.resolve(APP_PATH, "template/index.html"),
            inject: "body",
            hash: true
        }),
        // new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
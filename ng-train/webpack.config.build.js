var webpack = require("webpack");
var path = require("path");
const SRC_PATH = path.resolve(__dirname, "src");
const APP_PATH = path.resolve(__dirname, "build");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //css单独打包
const HtmlwebpackPlugin =  require('html-webpack-plugin'); //html模板
console.log("this is production");
module.exports = {
	devtool: "source-map", //开发工具  
    entry: {
        "bundle": path.resolve(SRC_PATH, "app.js"),
        "vendor": [ "angular", "angular-ui-router/release/angular-ui-router.min.js" ]
    },
    output: {
        path: APP_PATH,
        publicPath: "/",
        filename: "js/[name]-[hash:5].min.js"
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
                use: [
                    // {
                        // loader: 'ng-cache-loader?relativeTo=' + (path.resolve(__dirname, './src/components'))
                    // },
                    {
                        loader: "html-loader"
                    }

                    // {
                        // loader: "html-loader?root=/&attrs=img:src img:data-src link:href div:ng-include",
                        // loader: "ng-cache-loader?prefix=[dir]/[dir]"
                        // loader: "html-loader"
                        // loader: "html-loader?" + JSON.stringify({
                        //     attrs: ["img:src", "img:ng-src", "div:ng-include"]
                        // })
                    // }
                ]
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
		//打包 共享一些相同的依赖 避免重复打包
		new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "js/vendor-[hash:5].min.js" }),
		new webpack.optimize.UglifyJsPlugin({ 
			output: {
				comments: true 
			},  //去除注释  devtool  也必须是处于生产环境的选项
			compress: { warnings: false, "drop_debugger": true, "drop_console": true }
		}), //压缩
		new webpack.DefinePlugin({ //定义环境  可以在项目中判断是什么环境  在项目中 console.log(process_env) { NODE_ENV: "production" } 
			"process_env": {
				NODE_ENV: JSON.stringify("Production")
			}
		}),
		new HtmlwebpackPlugin({
            filename: "index.html",
            template: path.resolve(SRC_PATH, "template/index.html"),
            inject: "body",
            hash: true
        }),
		//new webpack.NoErrorsPlugin(), //出错不打断程序
		new ExtractTextPlugin("css/ng-train-[hash:5].css"),  //单独打包css

	]
}
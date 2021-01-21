const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendors: ['react']
    },
    module:{
        // 模块规则（配置 loader、解析器等选项）
       rules:[
           // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
           { 
               test: /\.tsx?$/, 
               loader: "awesome-typescript-loader",
               sideEffects: true
           },

           // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
           { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
           //加载cssloader
           {
               test: /\.css$/,
               use: ['style-loader','css-loader']
           }
       ],
       
    },
    resolve:{
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "MyProject!!!"
        }),
        
    ],
    optimization: {
        splitChunks: {
            // "initial" | "async" | "all" | ((chunk: Chunk) => boolean);
            chunks: "all",
            name: "common",
            usedExports: true,
            minSize: 100,
            // maxSize: 300
        }
    },
    output: {
        filename: "./[name][chunkhash:8].js",
        // chunkFilename: 
        //     // (pathData) => {
        //     //     console.log(pathData);
        //     //     return pathData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
        //     // },
        // "./[name][chunkhash].js",  // 动态导入 import(/* webpackChunkName: "lodash" */ 'lodash')
        path: path.resolve(__dirname,'build')
    }
}
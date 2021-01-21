const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common,{
    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        compress: true,
        hot: true,
        port: 8888
    }         
})
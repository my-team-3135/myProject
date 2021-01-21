const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports ={
    entry: {
        app: "./src/index.tsx",
        vendors: ['react']
    },   //入口文件
    output:{
        filename: "./[name].[chunkhash:8].js",  //输出文件chunkhash生成has值解决js缓存  此处可修改文件相对或绝对路径
        path: __dirname + "/build"  //输出路径
    },
    // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。
    devtool: "source-map", 
    // mode:"production",     //生产模式 
    mode:"development",     //开发模式 
    resolve:{
        extensions: [".ts", ".tsx", ".js", ".json"]
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
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM"
    },
    plugins:[
        //多个html页面可实例化多个
        new HtmlWebpackPlugin({
            title:"my-project",
            template: "index.html", // 源模板文件
            filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true
        }),
        new CleanWebpackPlugin(),   //打包前清空文件夹
        new webpack.HotModuleReplacementPlugin(),       //热模块替换
    ],
    // 打包压缩
    optimization:{
        sideEffects: true,
        // 模块只导出被使用的成员
        usedExports: true,
        // 尽可能合并每一个模块到一个函数中
        // concatenateModules: true,
        // 压缩输出结果
        minimizer: []
    },
    devServer:{
        // contentBase: path.join(__dirname, "build"),
        // clientLogLevel: "none",
        // publicPath: "/",        
        compress: true,
        // hotOnly: true,
        hot: true,
        port: 8888,
        proxy:{
            "/api": "http://localhost:3000", // /api/users 现在会被代理到请求 http://localhost:3000/api/users
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api" : ""},
                //绕过代理
                byPass: function(req, res, proxyOptions) {  
                    if (req.headers.accept.indexOf("html") !== -1) {
                      console.log("Skipping proxy for browser request.");
                      return "/index.html";
                    }
                }
            }
            // /api/users 现在会被代理到请求 http://localhost:3000/users
        }
        
    }


}
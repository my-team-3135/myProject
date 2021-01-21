项目构建
react webpack typescript redux

#设置npm淘宝镜像或使用cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm config set registry https://registry.npm.taobao.org

npm init 初始化项目
1、webpack初始化
    npm i  webpack webpack-cli -g  全局安装webpack
    新建 webpac.config.js文件。
    html-webpack-plugin   简化html文件的创建。自动匹配不断变化的文件，省去了手动维护。
    npm link webpack --save-dev（解决Cannot find module 'webpack/lib/node/NodeTemplatePlugin'）

    clean-webpack-plugin插件    删除输出目中之前旧的文件
    #开发环境（实时加载、热模块替换）
    source map  追踪错误和警告
    #提供简单web服务
    npm install --save-dev webpack-dev-server
    配置devServer 设置端口、接口代理等
    npm install --save-dev express webpack-dev-middleware
    
    #生产环境(资源优化)
    


    npm install --save react react-dom @types/react @types/react-dom	安装react
2、创建ts配置
    创建tsconfig.json (typescript编译器的配置)
    创建tslint.json（代码检查）
npm install --save-dev typescript awesome-typescript-loader source-map-loader	安装ts依赖
awesome-typescript-loader 编译ts	source-map-loader	调试



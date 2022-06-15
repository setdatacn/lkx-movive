const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // 自动打开浏览器
        open: true,
        // 设置主机地址
        host: "localhost",
        // 设置 npm run serve 启动后的端口号
        port: 8080,
        // vue项目代理请求
        proxy: {
            // 规则
            // axios中相对地址开头的字符串  匹配请求uri中的前几位
            "/api": {
                // 把相对地址中的域名 映射到 目标地址中
                // localhost:3000 => https://api.iynn.cn/film/api/v1/
                target: "https://api.iynn.cn/film/api/v1",
                // 修改host请求的域名为目标域名
                // changeOrigin: false,
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login ==> 目标 /v1/api/login
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    }
})
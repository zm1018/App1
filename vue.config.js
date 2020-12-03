// 这是自己写的配置文件,里面可以写自定义配置,我写了指定端口号和执行项目完成时自动打开浏览器
// const path = require('path')

module.exports = {
    devServer: {
        open: true,
        port: 8888,
        // 配置反向代理,如果要请求的页面有跨域问题(不在同一个服务器),浏览器直接发请求是拿不到数据的,需要在这里用proxy配置反向代理:
        proxy: {
            // 在category.vue组件文件里发送了请求猫眼电影的数据,它是通过ajax发的请求,有跨域问题报错,所以要通过node转发,在这里配置发送请求的方式是'/ajax',对象里的target(目标)属性值是要请求谁,写谁的协议和域名,我这里写了猫眼的ip地址,只要是我向自己的localhost发'/ajax'开头的请求,都会被node转发给猫眼电影,node服务端会自动把这个ip地址和我们写的发送ajax请求后面的路径拼接成一个完整路径,再由node向猫眼发这个请求,changeOrigin(改变起源的意思),要设置成true,如果要不想发给猫眼,target的值得改成我们要发给的那个ip地址
            '/ajax': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
}

/* // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
        publicPath: './',
        // 输出文件目录
        outputDir: 'dist',
        // eslint-loader 是否在保存的时候检查
        //   lintOnSave: true,  
        // 是否使用包含运行时编译器的 Vue 构建版本
        runtimeCompiler: false,
        // 生产环境是否生成 sourceMap 文件
        productionSourceMap: false,
        // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
        integrity: false,
        // webpack相关配置
        chainWebpack: (config) => {
            config.resolve.alias
                .set('vue$', 'vue/dist/vue.esm.js')
                .set('@', path.resolve(__dirname, './src'))
        },
        configureWebpack: (config) => {
            if (process.env.NODE_ENV === 'production') {
                // 生产环境
                config.mode = 'production'
            } else {
                // 开发环境
                config.mode = 'development';
            }
        },
        // css相关配置
         css: {
             // 是否分离css（插件ExtractTextPlugin）
             extract: true,
             // 是否开启 CSS source maps
             sourceMap: false,
             // css预设器配置项
             loaderOptions: {},
             // 是否启用 CSS modules for all css / pre-processor files.
             modules: false
         },
        // 是否使用 thread-loader
        parallel: require('os').cpus().length > 1,
        // PWA 插件相关配置
        pwa: {},
        // webpack-dev-server 相关配置 
        devServer: {
            open: true,
            host: 'localhost',
            port: 8888,
            https: false,
            hotOnly: false,
            // http 反向代理配置
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:3000/api',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
        },
        // before: (app) => {}
    }
    // 第三方插件配置
    // pluginOptions: {

// }}*/
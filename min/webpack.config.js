const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require("path")

module.exports = {
    mode: "development", //开发模式
    entry: "./app/main.js", //入口文件，也就是要改的文件
    output: {
        //path: path.resolve(__dirname, 'dist'), //创建文件夹的路径
        "publicPath": "dist",
        filename: 'bundle.js' //创建的名字
    },
    watch: true, //监听
    module: {
        rules: [{
                test: /\.js?$/,
                include: [path.resolve(__dirname, "app")], //包含
                exclude: [path.resolve(__dirname, "node_modules")], //不包含 ,里面是所有的依赖
                loader: "babel-loader", //用什么来翻译
                options: {
                    presets: ["env"], //环境 ECMA NEW v版本
                    "plugins": ["transform-object-rest-spread"] //ES6 的...
                }
            }, {
                test: /\.vue$/,
                loader: "vue-loader",
            }, { //加载 .css 文件
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader',
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [
                                path.resolve(__dirname, 'Bpp.styl'),

                            ]
                        }
                    }
                ]
            },
            { //加载图片文件
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { //loader 的参数配置
                        limit: 1024, // 图片大小 1024
                        name: 'Ican-[name].[ext]' //新文件名字 Ican-: 文件名前缀, [name]:原文件名,[ext]:扩展名
                    }
                }]
            },

        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },

    devServer: {
        inline: true,
    }
}
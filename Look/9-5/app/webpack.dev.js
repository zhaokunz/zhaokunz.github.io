const VueLoaderPlugin = require('vue-loader/lib/plugin') //vue需要
const path=require('path')
//cnpm i webpack webpack-cli webpack-dev-server  -g
//webpack 4

//去package.json看有没有快捷
//webpack-dev-server --config=webpack.dev.js启动
//webpack --config=webpack.dev.js打包

//打包   打包后本地可查看
//  1.代理路径 加.
//  2.index.html加.
//  3.webpack --config=webpack.dev.js打包 --实际中会有快捷键
//  上线模式 . 删掉
module.exports={
    entry:{//入口文件
        main:'./src/main.js'
    },
    mode:'development',//开发模式
    output:{//出口文件
        filename:'[name].js', //输出名字
        path:path.resolve(__dirname,'./dist'), //输出的路径
        publicPath:'./', //代理路径
    },
    devServer:{//热更新
        contentBase:'dist',//默认指向文件
        overlay:true, //让报错内容直接出现在浏览视图中

        host:'localhost' //真机测试
    },
    //确保引入的vue插件!
    plugins:[
        new VueLoaderPlugin()
    ],
    //vue代理
    resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js' 
		}
	},
    //打包 
    module:{
        rules:[
            //打包vue
            //cnpm i vue-loader vue-template-compiler --save
            {
                test:/\.vue$/,  
                loader:'vue-loader'
            },

            /*
                还会有一些把es6转成es5......
            */

            //打包css
            //css文件需要cnpm i style-loader css-loader --save
            {
                test:/\.css$/,   //$表示不止一次匹配
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            //打包html
            //cnpm i file-loader extract-loader html-loader --save
            //打包名字  分离html/css/js  打包
            {
                test:/\.html$/, 
                use:[
                    {loader:'file-loader',options:{name:'[name].html'}},
                    {loader:'extract-loader'},
                    {loader:'html-loader'}
                ]
            },
            //打包img  直接用file-loader 不需要cnpm了 
            //可以配置所有静态文件 文字图片格式
            {
                test:/\.(jpg|png|gif|svg)$/, 
                use:[
                    {loader:'file-loader',options:{name:'[name].[ext]'}}
                ]
            }
        ]
    }
}
//最后webpack --config=webpack.dev.js打包

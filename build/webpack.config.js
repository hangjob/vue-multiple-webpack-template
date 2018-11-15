//webpack-merge 将单个配置合成一个配置

//clean-webpack-plugin 清除目录，删除，从新打包

//extract-text-webpack-plugin 提取css

//html-webpack-plugin 生成html页面

const merge = require('webpack-merge')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const path = require('path')

const baseConfig = {
    entry:{
        vue:'vue'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
        filename:'js/[name].[hash].js'
    },

    devtool:'eval-source-map',

    devServer:{
        port:9001,
        inline: true,
        hot: true,
        historyApiFallback: true,
        publicPath: '/',
    },
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    }]
                })
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vue",
                    minChunks: Infinity
                }
            }
        }
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'css/[name].[hash].css'
        }),
        //清除之前的打包的文件
        new CleanWebpackPlugin(path.resolve(__dirname,'dist')),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin()
    ]
   
}

//生成每个页面的配置
const generatePage = function({
    title='',
    entry = '',
    template = './src/index.html',
    name= '',
    chunks = []
}={}){
    return {
        entry,
        plugins:[
            new HtmlWebpackPlugin({
                chunks,
                template,
                title,
                filename:name + '.html'
            })
        ]
    }
}

const pages = [
    generatePage({
        title:'page a',
        entry:{
            a:'./src/pages/a.js'
        },
        name:'a',
        chunks:['react','a']
    }),
    generatePage({
        title:'page b',
        entry:{
            b:'./src/pages/b.js'
        },
        name:'b',
        chunks:['react','b']
    }),  
    generatePage({
        title:'page c',
        entry:{
            c:'./src/pages/c.js'
        },
        name:'c',
        chunks:['react','c']
    }),
]

console.log(merge([baseConfig].concat(pages)))
module.exports = pages.map(page =>merge(baseConfig,page))

// module.exports = merge([baseConfig].concat(pages))
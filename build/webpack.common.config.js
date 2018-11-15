
const path = require('path')

const merge = require('webpack-merge')

const productionConfig = require('./webpak.prod.config.js');

const developmentConfig = require('./webpak.dev.config.js');



const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'


const VueLoaderPlugin = require('vue-loader/lib/plugin');


const pages  = require('./webpack.pages.config'); //加载多页面入口

function resolve(dir){
    return path.join(__dirname,'..',dir)
}

//配置公共部分
const generateConfig = env => {

    return{
        entry:{
            vue:['vue']
        },
        output:{
            path:path.resolve(__dirname,'../dist'),
            publicPath:'./',
            filename:'js/[name].[hash].js'
        },
        resolve:{
            // 自动resolve的扩展名
            extensions: ['.js', '.vue', '.json'],
            // resolve模块的时候要搜索的文件夹
            modules: [
                resolve('src'),
                resolve('node_modules')
            ],
            alias: {
                '@': path.resolve(__dirname, '../src')
            }
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ],
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders:{
                            css: ExtractTextWebpackPlugin.extract({
                                use: 'css-loader',
                                fallback: 'vue-style-loader'
                            })
                    }}
                },
                {
                    test: /\.(png|svg|jpg|gif|woff|woff2|svg|eot|ttf)$/,
                    loader: 'url-loader?limit=8192&&name=imags/[name].[ext]',
                    options:{
                        publicPath:'./images'
                    }
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ],
                }
            ]
        },
        plugins:[

            //生成对应的文件目录
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash].css',
                chunkFilename: 'css/[id].css'
            }),
            
            new VueLoaderPlugin()

        ]
    }

}





module.exports = (env) =>{

    // 获取开发模式 ：process.env.NODE_ENV 

    //获取当前开发坏境并判断开发坏境
    let config = env === 'development' ? developmentConfig : productionConfig

    //merge 合拼配置-神器

    //merge([generateConfig(env)].concat(pages,config)) --> 多页面-多配置
    return merge([generateConfig(env)].concat(pages,config)) //多页面-单配置
}
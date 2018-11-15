const HtmlWebpackPlugin = require('html-webpack-plugin')

//生成每个页面的配置
const generatePage = function({
    title='',
    entry = '',
    template = './src/index.html',//模板入口文件
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


//配置页面
const pages = [
    generatePage({
        title:'page a',//title-注意模板文件
        entry:{
            a:'./src/pages/a.js',//入口.js
        },
        name:'test1',//文件名
        chunks:['vue','a'] //公共文件
    }),
    generatePage({
        title:'page b',
        entry:{
            b:'./src/pages/b.js'
        },
        name:'test2',
        chunks:['vue','b']
    }),  
    generatePage({
        title:'page c',
        entry:{
            c:'./src/pages/c.js'
        },
        name:'test3',
        chunks:['vue','c']
    })
]


module.exports  = pages;
const webpack = require('webpack')

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports  = {

    devtool:'eval-source-map',

    devServer:{
        port:9001,
        inline: true,
        hot: true,
        historyApiFallback: true,
        publicPath: '/',
    },
    
    mode:'development',

    plugins:[

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin()
    ]
}
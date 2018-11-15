const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')

module.exports  = {

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "vue",
    //                 minChunks: Infinity
    //             }
    //         }
    //     }
    // },
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
    
    mode:'production',

    plugins:[

        new CleanWebpackPlugin('dist', {
            root: path.join(__dirname, '../')
        })

    ]

}
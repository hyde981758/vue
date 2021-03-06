const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/js/main.js',

    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'buld.js'
    },

    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    // resolve:{alias:{'vue':'vue/dist/vue.js'}},
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.tpl$/,
                use:[
                    'html-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:5000
                        }
                    }
                    // 'image-webpack-loader'
                ]
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015'],
                        plugins:['transform-runtime']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:[
                    'vue-loader'
                ]
            }
        ]
    }
}
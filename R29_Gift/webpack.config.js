const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpak = require('webpack');
const config = {
    entry: './dev/index.js',
    output: {
        filename: 'bundle.js',
        path:'./dev',
        // publicPath:"http://localhost:8080/build"
    },
    module:{
        loaders:[{
            test: /\.scss$/,
            loaders:['style','css','sass']
        },{
            test:/\.(js|jsx)$/,
            loaders:['babel?presets[]=es2015'],
            exclude:/node_modules/
        }]
    },
    devTools: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase:'./dev',

    },
    plugins: [
        // new HtmlWebpackPlugin({template: './dev/index.html'})
    ]

};
module.exports = config;

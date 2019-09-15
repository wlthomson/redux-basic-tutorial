// This example still uses CommonJS syntax because Node hasn't yet shipped support for ES6 module syntax at the time of writing
var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
    mode: "development",
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'index.html'
        })
    ]
};

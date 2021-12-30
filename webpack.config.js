// import "./styles/master.css";
// import "./styles/master.sass";

const { resolve } = require('path'); // 1
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 1

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'), // 2
        filename: 'main.[contenthash].js'  // 3
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i, // 1
                use: 'file-loader',
                // options: {
                //     name: '[path][name].[ext]',
                // },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, // 1
            {
                test: /\.s[ac]ss$/i,          // 2
                use: [
                    'style-loader', // 3
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, './src/index.html') })
    ],
    devServer: {  // configuration for webpack-dev-server
        //contentBase: './src/public',  //source of static assets
        port: 5000, // port to run dev-server
    }

};
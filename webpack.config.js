const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssEctractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /styles\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /styles\.css$/,
                use: [MiniCssEctractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false
                }

            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssEctractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new copyPlugin([
            { from: 'src/assets', to: 'assets/' }
        ])
    ]

}
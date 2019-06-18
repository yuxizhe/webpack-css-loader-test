const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'production',
    stats: 'verbose',
    entry: { 
        css: './entrypoints/css.js',
        less: './entrypoints/less.js' ,
        sass: './entrypoints/sass.js'  
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    {
                        loader:'sass-loader',
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'css-loader',
                    {
                        loader:'less-loader',
                    }
                ]
            },
             {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({ analyzerMode: 'static', logLevel: 'silent' })
    ]
}

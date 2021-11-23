const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distFolder = 'dist';
const packageJson = require('./package.json');
module.exports = {
    entry: {
        main: path.join(__dirname, 'src/main.ts')
    },
    output: {
        path: path.join(__dirname, distFolder),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /(node_modules)/,
                use: ['ts-loader']
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            title: packageJson.name.toUpperCase()
        })
    ],
    stats: 'none',
    mode: 'development',
    devServer: {
        open: true,
        static: path.resolve(__dirname, distFolder),
        port: 4000,
    }
}

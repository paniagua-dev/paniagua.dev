const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const distFolder = 'dist';
const packageJson = require('./package.json');

function styleLoader(mode) {
    return {
        test: /\.less$/i,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        strictMath: true,
                        paths: [path.resolve(__dirname, 'src', 'styles')]
                    },
                },
            },
        ],
    };
}

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/main.ts')
    },
    output: {
        path: path.join(__dirname, distFolder),
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /(node_modules)/,
                use: ['ts-loader']
            },
            styleLoader(),
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(jpe?g|png|gif|svg|eps)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                exclude: /nodes_modules|index.html/,
                loader: 'html-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            title: packageJson.description
        }),
        new MiniCssExtractPlugin(),
    ],
    stats: 'none',
    mode: 'development',
}

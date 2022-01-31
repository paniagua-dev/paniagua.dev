const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const distFolder = 'dist';
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: false,
        static: path.resolve(__dirname, distFolder),
        port: 4000,
    },
});

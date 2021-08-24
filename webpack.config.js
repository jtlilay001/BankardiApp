const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{test: /\.css$/i, use: ['style-loader', 'css-loader']}]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), 
        }, 
        port: 9000, 
    }
};
module.exports = {
    mode: 'development',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        }]
    }
}

const path = require('path')

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
            exclude: path.resolve('./node_modules/'),
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        }]
    }
}

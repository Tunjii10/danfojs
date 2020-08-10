const path = require('path');

module.exports = {
    entry: './danfojs/src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        library: 'dfd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader",
                    "source-map-loader"],
                enforce: 'pre',
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve('./app/bundles'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx']
    },
};
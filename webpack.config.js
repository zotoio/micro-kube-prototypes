// webpack.config.js

const glob = require("glob");

module.exports = {
    entry: glob.sync("./src/**/!(*.spec).ts"),
    output: {
        path: process.cwd() + '/dist/',
        filename: 'bundle.js'
    },
    target: 'node',
    devtool: 'source-map',
    mode: process.env.NODE_ENV || 'production',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};

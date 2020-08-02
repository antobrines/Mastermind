module.exports = {
    entry: __dirname + '/kernel.class.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: 'mastermind-kernel.js',
        libraryTarget: "umd",
        libraryExport: 'default',
        library: 'MastermindKernel',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
            }],
            exclude: /node_modules/
        }],
    },
};
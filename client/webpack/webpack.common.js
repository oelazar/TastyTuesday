const path = require('path')

const PATHS = {
    main: path.join(__dirname, '../src/js/index.js'),
    build: path.join(__dirname, '../build'),
    dist: path.join(__dirname, '../dist') /* we need to change this to /server/public */
}

exports.PATHS = PATHS

exports.module = {
    entry: {
        app: [PATHS.main],
        vendor: ["react-router-dom", "react-router", "react-dom", "react-image", "lodash"]
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.scss/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)(?:\?.*|)$/i,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {hash: "sha512", digest: "hex", name: "./assets/images/[hash].[ext]"}
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)$/,
                loader: 'file-loader',
                options: {
                    name: './assets/fonts/[name].[ext]',
                },
            }
        ]
    }
}
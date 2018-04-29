import webpack from 'webpack'
import path from 'path'

const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true', 
        path.resolve(__dirname, './src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, './src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }, {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            }
        ]
    },
    stats: {
        maxModules: 100,
        modules: true,
        reasons: true,
        performance: true
    
    },
    watch: true,
}
module.exports = config
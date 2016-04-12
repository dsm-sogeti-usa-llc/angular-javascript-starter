var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getDevtool(env) {
    return env === 'test'
        ? 'inline-source-map'
        : 'source-map';
}

function getEntry(env) {
    if (env === 'test') 
        return undefined;
        
    return {
        vendor: './src/vendor.js',
        app: './src/bootstrap.js'
    };
}

function getOutput(env) {
    return {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        sourceMapFilename: '[file].map'
    }
}

function getPlugins(env) {
    var plugins = [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ];
    
    if (env === 'prod') {
        plugins.push(new webpack.optimize.DedupePlugin());
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }
    
    return plugins;
}

function getModule(env) {
    return {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/  
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(scss|css)$/,
                loader: 'style!css!sass'
            }
        ]
    };
}

function getResolve(env) {
    return {
        extensions: ['', '.js', '.scss', '.css', '.html']
    }
}

module.exports = function (env){
    return {
        entry: getEntry(env),
        output: getOutput(env),
        resolve: getResolve(env),
        module: getModule(env),
        plugins: getPlugins(env)
    };
}
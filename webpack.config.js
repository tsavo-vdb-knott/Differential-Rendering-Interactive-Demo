const path = require('path');
const merge = require('webpack-merge');
const {createDefaultConfig} = require('@open-wc/building-webpack');
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin');
const webpack = require('webpack');

module.exports = env => merge(
    createDefaultConfig({
        plugins: {
            excludeList: [/\.jpg$/, /\.png$/, /\.ico$/]
        },
        input: path.resolve(__dirname, `./${env.APP}/index.html`),
    }),
    {
        output: {
            publicPath: '/',
            path: path.join(process.cwd(), env.MODE === 'Development' ? 'compiled' : `${env.APP}/dist`),
            filename: '[name].[contenthash].js',
            sourceMapFilename: '[name].[contenthash].map',
            chunkFilename: '[contenthash].js'
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.MODE': JSON.stringify(env.MODE),
                'process.env.DEPLOYMENT': JSON.stringify(env.DEPLOYMENT)
            }),
            new IgnoreNotFoundExportPlugin({
                include: [/\.ts/]
            }),
        ],
        module: {
            rules: [{
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, './tsconfig.json'),
                            transpileOnly: true
                        }
                    }
                ]
            }],
        },
        devServer: {
            port: 8081,
            index: path.resolve(__dirname, `./${env.APP}/index.html`),
            publicPath: "/",
            contentBase: process.cwd(),
            compress: true,
            historyApiFallback: true,
            stats: {
                stats: 'errors-only',
            },
        },
    });

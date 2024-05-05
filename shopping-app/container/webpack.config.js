const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:3001/remoteEntry.js',
                cart: 'cart@http://localhost:3002/remoteEntry.js'
                
            }
        })
    ]
};

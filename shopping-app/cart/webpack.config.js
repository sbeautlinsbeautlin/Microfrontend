const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 3002,
        static: {
            directory: path.join(__dirname, 'public'), // Serve files from the public directory
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html', // Use public/index.html as template
        }),
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartIndex': './src/index',
                './CartImage': '/cart/public/cart.jpg'
            }
        })
    ]
};

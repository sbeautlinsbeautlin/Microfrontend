const  path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
module.exports={
    mode:"development",
    devServer:{
        port:3001,
        static:{
            directory:path.join(__dirname,'public')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./dist/index.html'
        }),
        new ModuleFederationPlugin({
            name:'products',
            filename:'remoteEntry.js',
            exposes:{
                './ProductIndex':'./src/index',
                './ProductImage': '/products/public/Amazon.jpg'
            }
        })
    ]
}
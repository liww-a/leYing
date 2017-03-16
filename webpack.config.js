var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  //定义入口
  //entry:'./src/app.js',
  //entry:['./src/app.js','./src/search.js']
  entry:{
    app:'./src/scripts/app.js'
  },
  //定义出口
  output:{
    path:__dirname+'/build',
    //filename:'bundle.js'
    filename:'[name]_[chunkhash].js'
  },
  //引入loaders
  module:{
    loaders:[
      {//css loader抽离版的
        test:/\.css$/,
        loader:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
      },
      {//sass loader抽离版的
        test:/\.scss$/,
        loader:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader!sass-loader'
        })
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'react-hot-loader!babel-loader'
      },
      {
        test:/\.jsx$/,
        exclude:/node_modules/,
        loader:'react-hot-loader!babel-loader'
      }
    ]
  },
  //定义服务器
  devServer:{
    contentBase:'./build',
    host: 'localhost',
    historyApiFallback: false,
    port: 8000,
    proxy: {
      "/api": {//只要碰到/api就会转到http://localhost:3000
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""}
      }
    }
  },
  externals: {
    jquery: 'window.jQuery',
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter'
  },
  //配置插件
  plugins:[
    new HtmlWebpackPlugin({//生成html模板
      title:'webpack demo',
      filename:'app.html',
      template:'my-webpack.ejs',
      abc:'整站静态化原理'
    }),
    new ExtractTextPlugin({//版本号控制
      filename:'app_[hash].css',
      disable:false,
      allChunks:true
    })
    // new webpack.optimize.UglifyJsPlugin({//压缩js代码
    //   compress:{warnings:false},
    //   output:{comments:false}
    // })
  ]


}

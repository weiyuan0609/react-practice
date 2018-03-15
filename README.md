# react-practice
react practice product


## 搭建简单React工程
1. npm init 生成 package.json 文件.
2. 安装依赖包
   npm install --save react - 安装React.  
   npm install --save react-dom 安装React Dom,这个包是用来处理virtual DOM。用React Native的话，这里就是安装react-native。  
   npm install --save-dev webpack - 安装Webpack  
   npm install --save-dev webpack-dev-server - webpack官网出的一个小型express服务器，主要特性是支持热加载  
   npm install --save-dev babel-core - 安装Babel,可以把ES6转换为ES5，注意Babel最新的V6版本分为babel-cli和babel-core两个模块，这里只需要用babel-cor即可  
   npm install --save-dev babel-loader - webpack中需要用到的loader.
   安装babel相关插件
   npm install --save babel-runtime  
   npm install --save-dev babel-plugin-transform-runtime  
   npm install --save-dev babel-preset-es2015  
   npm install --save-dev babel-preset-react  
   npm install --save-dev babel-preset-stage-2  
3. 打开 package.json 然后添加下面的scripts:

       "scripts": {
         "start": "webpack-dev-server --hot --inline --colors --content-base",
         "build": "webpack --progress --colors"
       }
 
4. 创建webpack配置文件，webpack.config.js来命名这个配置文件，假如你用别的名字比如webpack.config.prod.js那么上面的脚本build就需要相应的改变指定相应的配置文件名字："build": "webpack webpack.config.prod.js --progress --colors"
    
        var webpack = require('webpack');
        module.exports = {
          entry: './src/app.js',
          output: {
              path: __dirname + '/build',
              filename: "bundle.js"
          },
          mode: 'development', // 若是webpack4以上 要添加这个
          module: {
              rules: [{
                  test: /\.js$/,
                  exclude: /node_modules/,
                  loader: 'babel-loader',
                  query: {
                      plugins: ['transform-runtime'],
                      presets: ['es2015', 'react', 'stage-2']
                  }
              }, {
                  test: /\.css$/,
                  loader: "style-loader!css-loader"
              }]
          }
        };

以上基本环境搭建完。

##创建react组件
1. 首先我们在项目根目录中新建一个 index.html 文件     

        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Document</title>
        </head>
        <body>
          <div id="app"></div>
          <script src="bundle.js"></script>
        </body>
        </html>
        
2. 建立一个新的文件夹 src. 代码都将放在这个文件夹里面。在 src 中建立 app.js，作为React的根组件,其他所有的组件都会注入到这个跟组件中
3. 首先我们需要导入react，现在都已经用ES6的语法， import React from 'react'; ， 然后我们要引入react-dom. 这里面有react中最重要的一个虚拟dom的概念.引入代码：import ReactDOM from 'react-dom';
    
    在 app.js 的下面添加: ReactDOM.render(<App />, document.getElementById('app'));  
    第一个参数就是我们App的根组件, 写作<App />的形式. 第二个参数就是我们的APP将要主要的DOM元素. 在这个项目中，就是我们在index中写的id为app的 div标签

    启动就可以看到 hello world
    
        import React from 'react'
        import ReactDOM from 'react-dom'
        
        class App extends React.Component {
            render() {
                return (
                    <div>
                        Hello World test
                    </div>
                )
            }
        }
        
        ReactDOM.render(<App />, document.getElementById('app'))
        
4. 创建列表list添加删除功能组件（components）  
    https://github.com/weiyuan0609/react-practice/tree/temp2

5. 添加redux 和 eslint  
    https://github.com/weiyuan0609/react-practice/tree/master
        
    


参考文献：  
react:  
https://doc.react-china.org/docs/hello-world.html
   
redux:   
https://redux.js.org/

其他：  
http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html  
https://www.jianshu.com/p/324fd1c124ad
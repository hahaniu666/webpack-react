### 一、初始化webpack开发环境
1.新建文件夹 ```mkdir my-react && cd my-react```

2.初始化项目 ```npm init -y```，然后我们会看到目录下面有个package.json文件

3.执行
```npm install webpack webpack-cli -D ```
（-D是--save-dev的简写，意思是保存到开发环境，不会打包上线；-S是--save的简写，意思是安装的该依赖会打包到生产环境）

### 二、初始化react开发环境

4.安装react相关 
```
npm install react react-dom  -S 
```

5.在目录下面创建src/App.js文件
```
mkdir src && touch App.js
```
内容为：
```
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <div>my-first-react-project</div>
            </div>
        )
    }
}

export default App;
```
6.上面为业务组件页面，我们还需创建一个打包入口文件，命名为index.js，如下：
```
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(<App />, document.getElementById('root'));
```
7.那现在打包入口文件，业务组件都有了，还需要一个展示页面index.html,
```
mkdir public && cd public && touch index.html
```
```
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(<App />, document.getElementById('root'));
```
8.然后我们配置webpack打包命令，创建webpack.config.js
```
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, './dist')
    }
}
```
9.修改package.json，在scripts对应对象中添加start命令
```
{
  "name": "my-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack"
  },
  ...(省略)
}

```
10.然后我们执行npm start,会出现以下报错
```

> my-react@1.0.0 start /Users/hahaniu/Documents/github/my-react
> webpack

Hash: 895e0d28d20ff7b0ccae
Version: webpack 4.42.0
Time: 65ms
Built at: 2020-03-22 10:57:01 PM
       Asset      Size  Chunks             Chunk Names
js/bundle.js  4.09 KiB    main  [emitted]  main
Entrypoint main = js/bundle.js
[./src/index.js] 322 bytes {main} [built] [failed] [1 error]

ERROR in ./src/index.js 5:16
Module parse failed: Unexpected token (5:16)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| import App from './App';
| 
> ReactDom.render(<App />, document.getElementById('root'));
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! my-react@1.0.0 start: `webpack`
npm ERR! Exit status 2
npm ERR! 
npm ERR! Failed at the my-react@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/hahaniu/.npm/_logs/2020-03-22T14_57_01_726Z-debug.log
```
别慌，我们找到报错的地方ERROR，命令行中一般会提示不同的颜色。
提示中有一句You may need an appropriate loader xxx。

意思是：我不识别es6语法，你需要一个loader来让我识别。

解决办法：
11.安装以下相关loader 

* [webpack-loader](https://www.webpackjs.com/loaders/babel-loader/)
* [babel官网](https://www.babeljs.cn/)
```
npm install babel-loader babel-core babel-preset-env babel-preset-react -D
```
12.然后需要在目录下创建.babelrc文件，来告诉webpack需要编译什么文件
```
{
    "presets": [
        "env",
        "react"
    ]
}
```
13.修改webpack.config.js
```
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, './dist')
    },
    module: {
		rules: [{ 
			test: /\.js?$/, 
			include: path.resolve(__dirname, './src'),
			use: [{
				loader: 'babel-loader'
			}]
		}]
	},
}
```
14、修改完之后，在执行npm start，又报错了
```
> my-react@1.0.0 start /Users/hahaniu/Documents/github/my-react
> webpack

Hash: d08282dd6e336db53393
Version: webpack 4.42.0
Time: 69ms
Built at: 2020-03-22 11:03:44 PM
       Asset      Size  Chunks             Chunk Names
js/bundle.js  6.72 KiB    main  [emitted]  main
Entrypoint main = js/bundle.js
[./src/index.js] 2.92 KiB {main} [not cacheable] [built] [failed] [1 error]

ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (/Users/hahaniu/Documents/github/my-react/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)
    at Object.<anonymous> (/Users/hahaniu/Documents/github/my-react/node_modules/babel-loader/lib/index.js:10:11)
    at Module._compile (/Users/hahaniu/Documents/github/my-react/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (/Users/hahaniu/Documents/github/my-react/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)
    at loadLoader (/Users/hahaniu/Documents/github/my-react/node_modules/loader-runner/lib/loadLoader.js:18:17)
    at iteratePitchingLoaders (/Users/hahaniu/Documents/github/my-react/node_modules/loader-runner/lib/LoaderRunner.js:169:2)
    at runLoaders (/Users/hahaniu/Documents/github/my-react/node_modules/loader-runner/lib/LoaderRunner.js:365:2)
    at NormalModule.doBuild (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/NormalModule.js:295:3)
    at NormalModule.build (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/NormalModule.js:446:15)
    at Compilation.buildModule (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/Compilation.js:739:10)
    at moduleFactory.create (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/Compilation.js:1111:12)
    at factory (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/NormalModuleFactory.js:409:6)
    at hooks.afterResolve.callAsync (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/NormalModuleFactory.js:155:13)
    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/hahaniu/Documents/github/my-react/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/hahaniu/Documents/github/my-react/node_modules/tapable/lib/Hook.js:154:20)
    at resolver (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/NormalModuleFactory.js:138:29)
    at process.nextTick (/Users/hahaniu/Documents/github/my-react/node_modules/webpack/lib/NormalModuleFactory.js:346:9)
    at process._tickCallback (internal/process/next_tick.js:61:11)
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! my-react@1.0.0 start: `webpack`
npm ERR! Exit status 2
npm ERR! 
npm ERR! Failed at the my-react@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/hahaniu/.npm/_logs/2020-03-22T15_03_44_924Z-debug.log
```
我们在找到ERROR，里面有一句，意思是你先在装的loader是6.x的版本，我需要7.x的版本。那好，就照你说的做，安装7的版本

```
 npm install babel-loader@7 -D   
```
15.然后执行npm start，你会发现成功了，并且在目录下面有个dist文件夹，我们只需要在public/index.html中引入此js即可

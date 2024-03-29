# node

## node 和浏览器的 export

Node 和浏览器端所支持的模块规范不同。

| 条目     |            Node             |                 浏览器 |
| -------- | :-------------------------: | ---------------------: |
| 模块规范 |          CommonJS           |                    ES6 |
| 导出     | \* modules.exports; exports | export; export default |
| 引入     |      require import；       |                require |

```
1. 关于 exports 和 module.exports
 在一个 node 执行一个文件时，会给这个文件内生成一个 exports 和 module 对象，
 而 module 有一个 exports 属性。
 exports = module.exports = {};

2. 关于 export 和 export default
 export 与 export default 均可用于导出常量、函数、文件、模块等
 在一个文件或模块中，export、import 可以有多个，export default 仅有一个
 通过 export 方式导出，在导入时要加{ }，export default 则不需要
 export 能直接导出变量表达式，export default 不行。
```

## exports 和 module.exports

模块：
模块接口的唯一变化是使用 module.exports = Hello 代替了 exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

exports（间隔了一层，再访问属性）和 module.exports(可以直接访问属性)的区别:

### exports:

```
// world.js
function world() {
    console.log('Hello World');
}
exports.world = world;
```

另一个文件中：

```
// main.js
var world = require('./world.js');
console.log(world.world()) //Hello World
```

### module.exports:

```
// world.js
function world() {
    console.log('Hello World');
}
module.exports = world;
```

另外一个文件中

```
// main.js
var world = require('./world.js');
console.log(world()) //Hello World
```

## 获取路径

```
    __dirname                // 总是返回被执行的 js 所在文件夹的绝对路径
    __filename               // 总是返回被执行的 js 的绝对路径
    process.cwd()            // 总是返回运行 node 命令时所在的文件夹的绝对路径
    ./                       // 跟 process.cwd() 一样，返回 node 命令时所在的文件夹的绝对路径
```

## npm 引用本地 node 包

使用`npm install ../test-jquery`安装本地包，安装前确认项目中 node_modules 没有同名的包,如果有，请删除。

> 然后在 package.json 中可以看到
> "test-jquery": "file:../../test-jquery"

## npm 依赖包不一致问题

使用`npm list >>npmlist` 将依赖对应结果导出成npmlist文件。在其中查找对应异常的包

## koa

### 本地 demo

1. 将下列俩文件 copy 到本地
2. 运行 `npm i`
3. 运行 `npm start` 即可看到效果

```json
// package.json
{
    "name": "demo",
    "version": "1.0.0",
    "description": "demo",
    "main": "app.js",
    "scripts": {
        "start": "nodemon app.js"
    },
    "keywords": ["koa", "async"],
    "author": "maozongmin",
    "dependencies": {
        "koa": "2.0.0",
        "nodemon": "^2.0.3"
    }
}
```

```js
// app.js
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.status = 200;
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, ko333a2!</h1>';
});

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
    console.log(`${ctx.request.method} ${ctx.request.url}2`); // 打印URL
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.listen(3000);
console.log('app started at port 3000...');
```

## 设置 npm install 的源

```
设置成淘宝源
npm config set registry https://registry.npm.taobao.org
查看结果
npm config get registry
```

## 设置 npm 的 proxy 代理

```
npm config set proxy http://generalichina\qtmp003:Aa123456
npm confit set https-proxy http://username:password@server:port
```

## 取消 npm 的 proxy 代理

```
npm config delete http-proxy
npm config delete https-proxy
```

## 清理缓存 

```
npm cache clean -f
```

## 升级 package.json 的包

<a href="https://github.com/raineorshine/npm-check-updates" target="_blank">npm-check-updates</a> 工具

```
npm install -g npm-check-updates
ncu -u
```

## 本地设置全局 npm 命令

在需要链接到全局的文件夹下使用 `npm link`  
执行命令默认为 name，也就是下面的 vite，执行入口为 bin，如果 bin 为对象，那么执行命令为 bin 的对象名，也就是 bin 下的 vite

```json
{
    "name": "vite",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "bin": {
        "vite": "./bin/www.js"
    },
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

<!-- npm install --global windows-build-tools -->

## linux卸载nodejs
1.先卸载npm

`sudo npm uninstall npm -g`

2.卸载node

`yum remove nodejs npm -y`

## 安装nvm进行切换node版本
- 提示：安装路径不能包含空格
- <a href="https://blog.csdn.net/QWERTYQ16/article/details/124497532" target="_blank">nvm的简介、安装、使用</a>
- <a href="https://blog.csdn.net/sunshineGGB/article/details/124249489" target="_blank">nvm use 版本号报错 </a>

## 将自定义的组件库软连接到项目中的node_modules
mklink /d E:\workspace\xxxxx\yui E:\workspace\yui
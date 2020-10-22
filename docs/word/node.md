# node
## node和浏览器的export
Node和浏览器端所支持的模块规范不同。

条目	Node	浏览器
模块规范	CommonJS	ES6
导出	* modules.exports; exports	export; export default
引入	require	import；require
1. 关于exports和module.exports
在一个node执行一个文件时，会给这个文件内生成一个 exports和module对象，
而module有一个exports属性。
exports = module.exports = {};
2. 关于 export 和export default
export与export default均可用于导出常量、函数、文件、模块等
在一个文件或模块中，export、import可以有多个，export default仅有一个
通过export方式导出，在导入时要加{ }，export default则不需要
export能直接导出变量表达式，export default不行。


## exports 和 module.exports
模块：
模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

exports（间隔了一层，再访问属性）和module.exports(可以直接访问属性)的区别:
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

## npm引用本地node包
> package.json 中
"test-jquery": "file:../../test-jquery"

## koa
### 本地demo
1. 将下列俩文件copy到本地
2. 运行 `npm i`
3. 运行 `npm start` 即可看到效果
``` json
// package.json
{
    "name": "demo",
    "version": "1.0.0",
    "description": "demo",
    "main": "app.js",
    "scripts": {
        "start": "nodemon app.js"
    },
    "keywords": [
        "koa",
        "async"
    ],
    "author": "maozongmin",
    "dependencies": {
        "koa": "2.0.0",
        "nodemon": "^2.0.3"
    }
}
```
``` js
// app.js
const Koa = require('koa')

const app = new Koa()

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

## 设置npm install的源

```
设置成淘宝源
npm config set registry https://registry.npm.taobao.org
查看结果
npm config get registry
```

## 升级package.json的包
<a href="https://github.com/raineorshine/npm-check-updates" target="_blank">npm-check-updates</a> 工具
```
npm install -g npm-check-updates
ncu -u
```

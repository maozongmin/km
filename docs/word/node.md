# node
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
# javascript
## 数组、字符串互转
数组转json字符串
``` js
var arr = [1,2,3, { a : 1 } ];
JSON.stringify( arr );
```
json字符串转数组
``` js
var jsonStr = '[1,2,3,{"a":1}]';
JSON.parse( jsonStr );
```
## Object.assign
> 合并对象

``` js
Object.assign(obj1, obj2, obj3);
```

## Set
::: tip 
ES6中的Set构造函数，set类似数组，但是值是唯一的。可以用来去重  
var a = new Set([1,2,3,6,6,6,1])  
// 输出：[1,2,3,6]
:::
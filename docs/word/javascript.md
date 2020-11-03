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

## 高清晰度canvas
``` js
/**
    * 创建高分辨率画布
    * @param w     画布宽
    * @param h     画布高
    * @param ratio 屏幕分辨率
    */
function createHiDPICanvas(w, h, ratio) {
    const PIXEL_RATIO = (function() {
        const c = document.createElement("canvas"),
            ctx = c.getContext("2d"),
            dpr = window.devicePixelRatio || 1,
            bsr =
                ctx["webkitBackingStorePixelRatio"] ||
                ctx["mozBackingStorePixelRatio"] ||
                ctx["msBackingStorePixelRatio"] ||
                ctx["oBackingStorePixelRatio"] ||
                ctx["backingStorePixelRatio"] ||
                1;

        return dpr / bsr;
    })();

    if (!ratio) {
        ratio = PIXEL_RATIO;
    }
    const can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

// 创建分辨率为 3 的画布
var img = document.getElementById("pic");
const canvas = createHiDPICanvas(230, 140, 2);
var ctx3 = canvas.getContext('2d')
img.onload = function(){
    ctx3.drawImage(img, 0, 0, 230, 140);
}
document.body.appendChild(canvas);
```

## js获取本地图片并转换成base64格式
<a href="https://blog.csdn.net/weixin_40431771/article/details/89380316">js获取本地图片并转换成base64格式</a>

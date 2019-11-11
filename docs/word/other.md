# 杂货铺
## cmd命令行乱码

::: tip cmd命令行乱码问题解决方案：
chcp 936    //设置成GBK （一般我们设置成这一项就可以显示中文了）   
chcp 65001  //设置UTF-8代码页   
chcp 437    //设置成美国英语  
::: 

## swiper在ios点击有蒙版
取消swiper点击有灰色蒙版的状态
.swiper-container,.swiper-wrapper,.swiper-slide {
    -webkit-tap-highlight-color:transparent !important;
}

## swiper嵌套无法滚动
```
swiper内页不能滚动的问题。
解决方法：
$(".test").on("touchmove",function(event){
    event.stopPropagation();
});
需滚动的元素取消冒泡

```
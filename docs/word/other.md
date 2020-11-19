# 杂货铺

## cmd 命令行乱码

::: tip cmd 命令行乱码问题解决方案：
chcp 936 //设置成 GBK （一般我们设置成这一项就可以显示中文了）  
chcp 65001 //设置 UTF-8 代码页  
chcp 437 //设置成美国英语  
:::

## swiper 在 ios 点击有蒙层

取消 swiper 点击有灰色蒙层的状态
.swiper-container,.swiper-wrapper,.swiper-slide {
-webkit-tap-highlight-color:transparent !important;
}

## swiper 嵌套无法滚动

```
swiper内页不能滚动的问题。
解决方法：
$(".test").on("touchmove",function(event){
    event.stopPropagation();
});
需滚动的元素取消冒泡

```

## nuxt.js 部署 vue 应用到服务端过程

<a href="https://segmentfault.com/a/1190000011805986#item-4" target="_blank">参考地址</a>

## 如何将 U 盘启动盘复原成普通 U 盘

<a href="https://jingyan.baidu.com/article/2f9b480dedf94e41ca6cc272.html" target="_blank">如何将 U 盘启动盘复原成普通 U 盘</a>

## lnmp 安装服务器

<a href="https://lnmp.org/install.html" target="_blank">lnmp 安装服务器</a>  
<a href="https://lnmp.org/faq/ftpserver.html" target="_blank">lnmp 安装 ftp</a>  
`lnmp ftp add|del|edit|show|list`

## Mac 下终端工具 iTerm2 安装

<a target="_blank" href="https://www.jianshu.com/p/ba08713c2b19">Mac 下终端工具 iTerm2 安装</a>

## 1 分钟将 vscode 撸成小霸王

https://juejin.im/post/6882576431503638536

## vscode 预览

```
# 预览md文件
Ctrl + Shift + V快捷键
```

## VuePress window document is not defined
<a target="_blank" href="https://segmentfault.com/a/1190000022727986">全局安装第三方插件，打包报错VuePress window document is not defined</a>

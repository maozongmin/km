# 怎样隐藏滚动条还能滚动页面（包括鼠标滚轮）？
```
方法1：在webkit内核的浏览器里可以定义滚动条样式。在CSS初始处定义::-webkit-scrollbar{  display:none;}  
方法2：在其他浏览器里可以设置父容器width: 100%;overflow: hidden; 子容器宽度为100%+18px这样滚动条处于视窗可视范围外
```

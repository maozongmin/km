# CSS
## 隐藏滚动条
### 怎样隐藏滚动条还能滚动页面（包括鼠标滚轮）？
```
方法1：在webkit内核的浏览器里可以定义滚动条样式。在CSS初始处定义::-webkit-scrollbar{  display:none;}  
方法2：在其他浏览器里可以设置父容器width: 100%;overflow: hidden; 子容器宽度为100%+18px这样滚动条处于视窗可视范围外
```

## table-cell
::: tip table-cell
将元素使用display:table-cell布局。
优点：垂直居中
缺点：不支持margin
解决方法：外面套一层，使用margin
:::

::: tip table-cell
table-cell处理多行文本的定高居中时，不能使用浮动和高度100%。
否则不居中
:::

## ie下的img
img使用自带的width："auto"、height="auto".
ie下展示不开，为一条线

## letter-spacing居中问题
使用letter-spacing会出现不能居中的问题letter-spacing: 0.5em;
因为最后一个字也占了0.5em的宽，可以padding-left：0.5em解决

## 移动端滚动卡帧
手机端滚动卡帧的情况，是因为body设置了height:100%;的原因，
但是body不设置高度将不可以全屏显示。
解决方法：body高设置auto，使用js获取屏高，赋予给需要全屏的页面

## 多行显示省略号
f-hide-col-1最好也需要设置高度，
否则在某种特定情况下，高度不同会导致排版错了
```
/*文字超过1行显示省略号*/
.f-hide-col-1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
/*文字超过2行显示省略号*/
.f-hide-col-2{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

## 二维码无法识别
手机端的二维码放background识别不了，需要使用img展示


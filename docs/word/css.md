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
::: tip 
```
text-overflow:clip       //修剪文本。
text-overflow:ellipsis   //显示省略符号来代表被修剪的文本。
text-overflow:string     //使用给定的字符串来代表被修剪的文本。
```
:::
1. 问题1：  
f-hide-col-1最好也需要设置高度，
否则在某种特定情况下，高度不同会导致排版错了
2. 问题2：  
inline-block和block同级。同时使用多行省略的情况下，
iphone手机端会出现占位空白
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
2或2张以上二维码无法在同一视窗被识别，识别时隐藏掉干扰项

## swiper嵌套无法滚动
```
swiper内页不能滚动的问题。
解决方法：
$(".test").on("touchmove",function(event){
    event.stopPropagation();
});
需滚动的元素取消冒泡

```

## overflow 如何不生效
父级元素不设置position:relative;子元素设置position:absolute;left:0;top不写，  
那么绝对定位是相对往上层级寻找有相对定位的祖先级靠左排布，其中父级元素的overflow:hidden对子元素不受限制。

## css邮件
邮件中不能使用style和iframe嵌入。  
能使用内联样式

## 边框
属性|描述
---|---
border: 2px solid red  |边框，可圆可方。占据页面空间  
outline：2px solid red|不占据页面空间。只有firefox支持圆角-moz-outline-radius，其余浏览器不支持  
box-shadow|根据元素的扩展阴影，不占据页面空间。可圆可方  

## css3 兼容文档
“支持”代表不在需要前缀（以下资料来自https://caniuse.com和css3文档手册）
“主流浏览器”代表“QQ浏览器，搜狗浏览器，360，edge最新版”
* line-clamp  
ie、edge、firefox不支持    其余的版本需要前缀
* Text-overflow  
firefox2.0-6不支持 其余均支持
* Display:box、box-orient   
ie6-11不支持  其余的版本需要前缀
* Border-radius  
 ie6-8不支持  ie9+、chrome5+、firefox4+、主流浏览器支持  其余的低版本需要前缀
* Transform   
ie6-9、 firefox 2.0-3.0不支持  ie10+、firefox16+、chrome36+、主流浏览器支持  其余旧版本需要前缀
* Transition  
ie6-10不支持  ie11+、firefox、chrome、最新版主流浏览器支持
* Box-sizing  
 ie6-7不支持  ie8+、firefox29+、chrome9+、主流浏览器支持  其余旧版本需要前缀
* Box-shadow  
ie6-8、 firefox 2.0-3.0不支持  ie9+、firefox4+、chrome10+、主流浏览器支持  其余旧版本需要前缀
* Calc  
ie6-8、firefox2.0-3.6、chrome4.0-18不支持  ie9+、firefox16+、chrome26+、主流浏览器支持  其余旧版本需要前缀
* Scrollbar  
包含scrollbar、scrollbar-button、scrollbar-track、scrollbar-track-piece、scrollbar-thumb、scrollbar-corner、resize）firefox、edge不支持  ie6+支持  其余需要前缀
* Animation  
ie6-9、firefox2.0-4.0不支持  ie10+、chrome43+、firefox16+、主流浏览器支持  其余的低版本需要前缀 
* ::placeholder  
ie6-9、firefox2.0-3.6不支持、chrome57+、firefox51+、主流浏览器支持  其余的低版本需要前缀
* Filter  
 ie6-11、edge12、firefox2.0-3.5、chrome4-17不支持 edge13+、 chrome53+、firefox35+、主流浏览器支持  其余的低版本需要前缀
* Linear-gradient  
ie6-9、edge12、firefox2.0-3.5不支持  ie10+、chrome26+、firefox16+、主流浏览器支持  其余的低版本需要前缀 
* device-pixel-ratio  
ie6-8、firefox2-3不支持  firefox3.5+、chrome29+、主流浏览器支持  其余的低版本需要前缀
* font-smoothing  
ie6-11、edge、firefox2-24、chrome4.0不支持   firefox25+、chrome5+、主流浏览器均需要前缀
* Flex  
ie6-9不支持  ie11+、chrome21+、firefox28+、主流浏览器支持  其余的低版本需要前缀
* Flex-basis：content  
暂时所有浏览器不支持
* display:flex、display:inline-flex、align-content、align-items、align-self、justify-content、order.   
ie6-9不支持  ie11+、chrome29+、firefox28+、主流浏览器支持  其余的低版本需要前缀 .温馨提示：ie10需前缀
* background、background-origin、background-clip、background-size  
ie6-8，firefox2-3.5不支持  ie9+、chrome、firefox4+、主流浏览器支持
* background-position  
ie6-8，firefox2.0-12，chrome4.0-24不支持  其余版本都支持
* background-repeat 中的round和space  
 ie6-8、firefox2-48、chrome4-31不支持 ie9+、chrome32、firefox49+、主流浏览器支持 
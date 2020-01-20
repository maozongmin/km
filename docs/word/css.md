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
## 强制换行
```
word-break: break-all;
white-space: pre-wrap;
```
## 二维码无法识别
手机端的二维码放background识别不了，需要使用img展示  
2或2张以上二维码无法在同一视窗被识别，识别时隐藏掉干扰项

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

## 样式图形
### 倒三角
<div style="
width: 0;
height: 0;
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-top: 40px solid #2A224A;">
</div>

### 上陷凹三角
<div style="
width: 0;
height: 0;
border-right: 260px solid rgb(42, 34, 74);
border-top: 167px solid transparent;
border-left: 260px solid rgb(42, 34, 74);
border-bottom: 330px solid rgb(42, 34, 74);">
</div>

### 左右三角
<div style="
width: 0;
height: 0;
border-top: 8px solid transparent;
border-bottom: 8px solid transparent;
border-right: 8px solid #8C72EE;
border-left: 8px solid red;">
</div>

## 图片模糊
::: tip 原因
图片尺寸应该保持偶数。
:::

## letter-spacing
`letter-spacing: 5px;`

## 丝滑滚动
```
overflow-y: scroll;
overflow-x: hidden;
-webkit-overflow-scrolling: touch;
```

## 滚动条设置
<style lang="stylus">
.box
    width: 100%
    text-align: center
    color: #fff
    background-color: #fb3
.box::-webkit-scrollbar 
    width: 6px
    height:6px
.box::-webkit-scrollbar-track-piece
	background-color:red
	margin: -2px
.box::-webkit-scrollbar-thumb
	background:green
	min-height: 150px
	min-width: 150px
	border-radius: 10px

.box::-webkit-scrollbar-thumb:vertical:hover
	background: pink

.box::-webkit-scrollbar-thumb:horizontal:hover
	background: #000

</style>
``` css
/*滚动条的宽高设置  */
::-webkit-scrollbar {
	width: 6px;
	height:6px;
}
/* 滚动条的导航空白背景 */
::-webkit-scrollbar-track-piece{
	background-color:red;
	margin: -2px;
}
/* 滚动条的移动块的部分 */
::-webkit-scrollbar-thumb{
	background:green;
	min-height: 150px;
	min-width: 150px;
	border-radius: 10px;
}
/* 竖向滚动条移动块hover的效果 */
::-webkit-scrollbar-thumb:vertical:hover{
	background: pink;
}
/* 横向滚动条移动块hover的效果 */
::-webkit-scrollbar-thumb:horizontal:hover{
	background: #000;
}
```
demo:
<div class="box" style="height: 200px;overflow: auto;">
<div style="height: 2000px;width: 800px;">
    lorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorexlorex
    <br>
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
</div>
</div>

## 移动端控件样式重置
button、checkbox、radio、reset、submit等 这些控件都可以使用，不过需要注意在Android和ios的手机上，控件的样式会所有不同，如果想完全掌控样式，需要reset一下-webkit-appearance:none，之后在设置自己需要的样式。

## 如何移除 input type="number" 时浏览器自带的上下箭头？
``` css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
```

## img和background一样自适应
* object-fit: contain  
被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。

* object-fit: cover  
被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。

* object-fit: fill  
被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。

* object-fit: none  
被替换的内容将保持其原有的尺寸。

* object-fit: scale-down  
内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。

## background-clip
* background-clip  设置元素的背景（背景图片或颜色）是否延伸到边框下面。  
<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip">background-clip示例详解</a>

## 命名规范
:::tip 规范
重置和默认：reset + base

布局(g-) 例如头部，尾部，主体，侧栏等

模块(m-) 较大整体，如登录注册，搜索等

元件(u-) 不可再分个体，例如按钮，input框等

功能(f-) 使用频率较高样式，例如清除浮动

皮肤(s-) 例如文字色，背景色，边框色等

状态(z-) 例如hover，选中等

j- 专门用于js获取节点，勿占用
:::
## css3 兼容文档
“支持”代表不在需要前缀（以下资料来自<a href="https://caniuse.com/">https://caniuse.com</a>和css3文档手册）
“主流浏览器”代表“QQ浏览器，搜狗浏览器，360，edge最新版”
* ***line-clamp***  
ie、edge、firefox不支持    其余的版本需要前缀
* ***Text-overflow***  
firefox2.0-6不支持 其余均支持
* ***Display:box、box-orient***  
ie6-11不支持  其余的版本需要前缀
* ***Border-radius***  
 ie6-8不支持  ie9+、chrome5+、firefox4+、主流浏览器支持  其余的低版本需要前缀
* ***Transform***  
ie6-9、 firefox 2.0-3.0不支持  ie10+、firefox16+、chrome36+、主流浏览器支持  其余旧版本需要前缀
* ***Transition***  
ie6-10不支持  ie11+、firefox、chrome、最新版主流浏览器支持
* ***Box-sizing***  
 ie6-7不支持  ie8+、firefox29+、chrome9+、主流浏览器支持  其余旧版本需要前缀
* ***Box-shadow***  
ie6-8、 firefox 2.0-3.0不支持  ie9+、firefox4+、chrome10+、主流浏览器支持  其余旧版本需要前缀
* ***Calc***  
ie6-8、firefox2.0-3.6、chrome4.0-18不支持  ie9+、firefox16+、chrome26+、主流浏览器支持  其余旧版本需要前缀
* ***Scrollbar***  
包含scrollbar、scrollbar-button、scrollbar-track、scrollbar-track-piece、scrollbar-thumb、scrollbar-corner、resize）firefox、edge不支持  ie6+支持  其余需要前缀
* ***Animation***  
ie6-9、firefox2.0-4.0不支持  ie10+、chrome43+、firefox16+、主流浏览器支持  其余的低版本需要前缀 
* ***::placeholder***  
ie6-9、firefox2.0-3.6不支持、chrome57+、firefox51+、主流浏览器支持  其余的低版本需要前缀
* ***Filter***  
 ie6-11、edge12、firefox2.0-3.5、chrome4-17不支持 edge13+、 chrome53+、firefox35+、主流浏览器支持  其余的低版本需要前缀
* ***Linear-gradient***  
ie6-9、edge12、firefox2.0-3.5不支持  ie10+、chrome26+、firefox16+、主流浏览器支持  其余的低版本需要前缀 
* ***device-pixel-ratio***  
ie6-8、firefox2-3不支持  firefox3.5+、chrome29+、主流浏览器支持  其余的低版本需要前缀
* ***font-smoothing***  
ie6-11、edge、firefox2-24、chrome4.0不支持   firefox25+、chrome5+、主流浏览器均需要前缀
* ***Flex***  
ie6-9不支持  ie11+、chrome21+、firefox28+、主流浏览器支持  其余的低版本需要前缀
* ***Flex-basis：content***  
暂时所有浏览器不支持
* ***display:flex、display:inline-flex、align-content、align-items、align-self、justify-content、order.***  
ie6-9不支持  ie11+、chrome29+、firefox28+、主流浏览器支持  其余的低版本需要前缀 .温馨提示：ie10需前缀
* ***background、background-origin、background-clip、background-size***  
ie6-8，firefox2-3.5不支持  ie9+、chrome、firefox4+、主流浏览器支持
* ***background-position***  
ie6-8，firefox2.0-12，chrome4.0-24不支持  其余版本都支持
* ***background-repeat 中的round和space***  
 ie6-8、firefox2-48、chrome4-31不支持 ie9+、chrome32、firefox49+、主流浏览器支持 
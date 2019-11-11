# html

## 嵌套规则
::: tip 嵌套规则
```
1. 内联元素不能嵌套块元素。
2. <p>元素和<h1~6>元素不能嵌套块元素。
```
:::

关于块级元素和内联元素:
块元素一般都从新行开始，内联元素在一行内显示，我们也可以通过CSS属性display的"inline"或"block"来改变元素为内联元素或块元素，当然这是CSS中对元素的分类，显然用"display"的属性值来对html元素进行分类是不严谨的。
```
// div最好不要作为ul的子元素进行嵌套
<ul>
    <li>内容</li>
    <div>内容</div>
</ul>     
```

## 图片alt
每个图片的alt都应该写上

## 全屏高度自动撑满
精华就是下列代码中高亮的部分
``` html {19,20,21}
<!DOCTYPE html>
<html>
	<head>
		<title>autoHeight demo</title>
		<style>
		html,
		body {
			height: 100%;
		}
		* {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
		div {
			border: 1px solid red;
		}
		.main {
			min-height: 100%;
			padding: 40px 0;
			margin: -40px 0;
		}
		.header,
		.footer {
			height: 40px;
			line-height: 40px;
		}
		</style>
	</head>
	<body>
		<div class="header">top</div>
		<div class="main"></div>
		<div class="footer">footer</div>
	</body>
</html>
```
# vue

## props 正确写法

Vue 的组件中的 props 尽量以下列方式书写：  
正确写法：
```
props: {
    pro1: {
        type: Object,
        default: function(){
            return {
                a: 1,
                b: 2
            }
        }
    },
    Pro2: {
        type: Boolean,
        default: function(){
            return true
        }
    }
}
```
不推荐写法：
```
Props: ['pro1', 'pro2']
```
## 子路由高亮父路由
::: tip 常用于菜单高亮
按下图配置，可以跳转到子路由的时候高亮父级路由的router-link标签上的active-class
```
<!-- active-class会触发显示 -->
<router-link active-class="menu-active" :to="{name: 'v4-test'}">测试</router-link>
```
:::
![图片alt](../.vuepress/public/img/1.png "图片title")


## npm run dev 无法启动

```
1.  netstat -ano //查看所有端口
2.  http协议里的某个进程占用了80，但是在任务管理器显示的是System,最后发现是http协议的某个进程占用（发现的过程也是在网上搜索得知道，这个进程显式停止是无法停止的，只有在cmd.exe里使用net stop http来停止
3.  Sc config http start = disabled
```

## package.json 设置环境变量

::: tip 设置和访问环境变量
设置环境变量 NODE_ENV：  
set NODE_ENV=test && node build/build.js  
访问变量 NODE_ENV：  
console.log(process.env.NODE_ENV)
:::

```
// egg
"build": "set NODE_ENV=production && webpack --config build/dist.js --progress --colors",
```

## node-sass构建失败
node-sass构建失败，重新构建执行：  
npm rebuild node-sass

## 拖放事件
拖放事件：必须给拖放区元素添加 dragover.prevent，才能使 drop 事件正确执行
```
<div style="border:1px solid red;height: 100px;width:300px;" @drop="drop" @dragover.prevent>
    <p style="color:#ccc;">{{this.dropData}}</p>
</div>
```
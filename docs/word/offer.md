# 常见问题

## 技术 - 前端知识

-   <b>dom 树节点和渲染树节点一一对应吗，有什么是 dom 树会有，渲染树不会有的节点?</b>

    在 DOM 树构建的同时，浏览器会构建渲染树（render tree）。渲染树的节点（渲染器），在 Gecko 中称为 frame，而在 webkit 中称为 renderer。渲染器是在文档解析和创建 DOM 节点后创建的，会计算 DOM 节点的样式信息。

    在 webkit 中，renderer 是由 DOM 节点调用 attach()方法创建的。attach()方法计算了 DOM 节点的样式信息。attach()是自上而下的递归操作。也就是说，父节点总是比子节点先创建自己的 renderer。销毁的时候，则是自下而上的递归操作，也就是说，子节点总是比父节点先销毁。

    如果元素的 display 属性被设置成了 none，或者如果元素的子孙继承了 display:none，renderer 不会被创建。节点的子类和 display 属性一起决定为该节点创建什么样的渲染器。但是 visibility：hidden 的元素会被创建。

    在 webkit 中，根据 display 属性的不同，创建不同的 renderer，比如：

    (1) display:inline，创建的是 RenderInline 类型。

    (2) display:block，创建的是 RenderBlock 类型。

    (3) display:inline-block，创建的是 RenderBlock 类型。

    (4) display:list-item，创建的是 RenderListItem 类型。

    position:relative 和 position:absolute 的元素在渲染树中的位置与 DOM 节点在 DOM 树中的位置是不一样的。

    DOM 树和渲染树的对应关系如下图：

    <img src="../.vuepress/public/img/20140224185057296.jpg"/>

-   <b>CSS 会阻塞 dom 解析吗？</b>

    ```
    浏览器是解析DOM生成DOM Tree，结合CSS生成的CSS Tree，最终组成render tree，再渲染页面。在此过程中CSS完全无法影响DOM Tree，因而无需阻塞DOM解析。

    CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。

    css加载会阻塞后面js语句的执行

    js会阻塞DOM树的解析，也会阻塞DOM树的渲染，但浏览器会"偷看"DOM，预先下载相关资源。

    浏览器遇到 <script>且没有 defer 或 async 属性的 标签时，会触发页面渲染，因而如果前面 CSS 资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。

    所以，你现在明白为何<script>最好放底部，<link>最好放头部，如果头部同时有<script>与<link>的情况下，最好将<script>放在<link>上面
    ```

-   requestIdleCallback 是干什么用的
    1 秒 60 帧不卡，所以 1 帧时间在 16.6ms 内完成， = 1000ms / 60fps = 16.6ms;

    1 帧需要做的事情：

    -   处理用户的交互
    -   JS 解析执行
    -   帧开始。窗口尺寸变更，页面滚去等的处理
    -   requestAnimationFrame(rAF)
    -   布局
    -   绘制

    当关注用户体验，不希望因为一些不重要的任务（如统计上报）导致用户感觉到卡顿的话，就应该考虑使用 requestIdleCallback。因为 requestIdleCallback 回调的执行的前提条件是当前浏览器处于空闲状态。

    requestAnimationFrame 的回调会在每一帧确定执行，属于高优先级任务，而 requestIdleCallback 的回调则不一定，属于低优先级任务。

-   浏览器的渲染原理及流程

    1. 根据 html 文件构建 DOM 树和 CSSOM 树。构建 DOM 树期间，如果遇到 JS，阻塞 DOM 树及 CSSOM 树的构建，优先加载 JS 文件，加载完毕，再继续构建 DOM 树及 CSSOM 树。

    2. 构建渲染树（Render Tree）。

    3. 页面的重绘（repaint）与重排（reflow，也有称回流）。页面渲染完成后，若 JS 操作了 DOM 节点，根据 JS 对 DOM 操作动作的大小，浏览器对页面进行重绘或是重排。

*   关键渲染路径详述

    ```
    处理 HTML 标记并构建 DOM 树。
    处理 CSS 标记并构建 CSSOM 树。
    将 DOM 与 CSSOM 合并成一个渲染树。
    根据渲染树来布局，以计算每个节点的几何信息。
    将各个节点绘制到屏幕上。
    ```

*   避免回流的方式
    1. 不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className，即将多次改变样式属性的操作合并成一次操作：
        ```
        // 不好的写法
        var left = 10,
        top = 10;
        el.style.left = left + "px";
        el.style.top  = top  + "px";
        el.style.background = '#eee';
        // 比较好的写法
        el.className += " theclassname";
        ```
    2. 让要操作的元素进行”离线处理”，处理完后一起更新
        - 使用 DocumentFragment 进行缓存操作,引发一次回流和重绘；
        - 使用 display:none 技术，只引发两次回流和重绘;
          原理：由于 display 属性为 none 的元素不在渲染树中，对隐藏的元素操 作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发 2 次重排。
        - 使用 cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
    3. 不要把 DOM 节点的属性值放在一个循环里当成循环里的变量。不然这会导致大量地读写这个结点的属性。
    4. 尽可能的修改层级比较低的 DOM 节点。当然，改变层级比较底的 DOM 节点有可能会造成大面积的 reflow，但是也可能影响范围很小。
       因为改变 DOM 树中的一级会导致所有层级的改变，上至根部，下至被改变节点的子节点。这导致大量时间耗费在执行 reflow 上面
    5. 将需要多次重排的元素，position 属性设为 absolute 或 fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素为动画的 HTML 元素，例如动画，那么修改他们的 CSS 是会大大减小 reflow 。因为,它们不影响其他元素的布局，所它他们只会导致重新绘制，而不是一个完整回流。这样消耗会更低。
    6. 。不要用 tables 布局的一个原因就是 tables 中某个元素一旦触发 reflow 就会导致 table 里所有的其它元素 reflow。在适合用 table 的场合，可以设置 table-layout 为 auto 或 fixed，这样可以让 table 一行一行的渲染，这种做法也是为了限制 reflow 的影响范围。
    7. 避免使用 CSS 的 JavaScript 表达式，如果 css 里有 expression，每次都会重新计算一遍。

-   跨域的方式
    -   跨域：当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。
    -   解决方案：
        1. jsonp：缺点是仅支持 get 方法具有局限性,不安全可能会遭受 XSS 攻击。
        2. cors：服务端设置 Access-Control-Allow-Origin 就可以开启 CORS
        3. postMessage：
            - 页面和其打开的新窗口的数据传递
            - 多窗口之间消息传递
            - 页面与嵌套的 iframe 消息传递
        4. WebSocket：Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket 和 HTTP 都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。
        5. Node 中间件代理(两次跨域)：同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略。
        6. nginx 反向代理：通过 nginx 配置一个代理服务器做跳板机，反向代理访问 domain2 接口，并且可以顺便修改 cookie 中 domain 信息，方便当前域 cookie 写入，实现跨域登录。
        7. window.name + iframe
        8. location.hash + iframe
        9. document.domain + iframe
-   前端的网络安全如何防御（xss，csrf）
    -   XSS 的根源主要是没完全过滤客户端提交的数据 ，所以重点是要过滤用户提交的信息。
        1. 将重要的 cookie 标记为 http only, 这样的话 js 中的 document.cookie 语句就不能获取到 cookie 了.
        2. 只允许用户输入我们期望的数据。例如：age 用户年龄只允许用户输入数字，而数字之外的字符都过滤掉。
        3. 对数据进行 Html Encode 处理： 用户将数据提交上来的时候进行 HTML 编码，将相应的符号转换为实体名称再进行下一步的处理
        4. 过滤或移除特殊的 Html 标签， 例如: `<script>, <iframe> , < for <, > for >, &quot for`
        5. 过滤 js 事件的标签。例如 "onclick=", "onfocus" 等等。
    -   防止 CSRF 的解决方案
        1. 重要数据交互采用 POST 进行接收，当然是用 POST 也不是万能的，伪造一个 form 表单即可破解。
        2. 使用验证码，只要是涉及到数据交互就先进行验证码验证，这个方法可以完全解决 CSRF。但是出于用户体验考虑，网站不能给所有的操作都加上验证码。因此验证码只能作为一种辅助手段，不能作为主要解决方案。
        3. 验证 HTTP Referer 字段，该字段记录了此次 HTTP 请求的来源地址，最常见的应用是图片防盗链。
        4. 为每个表单添加令牌 token 并验证
    -   防止 SQL 注入的解决方案
        1. 对用户的输入进行校验，使用正则表达式过滤传入的参数
        2. 使用参数化语句，不要拼接 sql，也可以使用安全的存储过程
        3. 不要使用管理员权限的数据库连接，为每个应用使用权限有限的数据库连接
        4. 检查数据存储类型
        5. 重要的信息一定要加密
-   cookies 的保护方式

    优先使用渲染层合并属性、控制层数量

    对用户输入事件的处理函数去抖动（移动设备）

-   浏览器的缓存机制

-   什么文件用强缓存，什么文件用协商缓存

-   React-Native 的原理，优缺点

-   react 的虚拟 dom 和 diff 描述

-   react 渲染优化（class，hook）

-   react 的 context 的使用场景

-   node 和后端知识

-   mysql 和 mongo 的区别，使用情景

-   node 有什么情况会导致内存溢出

    -   在 Node 中通过 JavaScript 使用内存时只能使用部分内存（64 位系统：1.4 GB，32 位系统：0.7 GB），这个时候，如果前端项目非常的庞大，Webpack 编译时就会占用很多的系统资源，如果超出了 V8 引擎对 Node 默认的内存限制大小时，就会产生内存泄露(JavaScript heap out of memory)的错误。

-   node 的内存分配

-   event loop（浏览器和 node）

-   首屏优化方案

-   在 App 中如何实现前端资源离线缓存（方案）

## 二面-技术面

晚上，视频面试，属于其他部门同事。

前端知识

浏览器的输入 url 后的过程

js 异步方式

promise.resolve 是干嘛的

promise.then 如何实现链式调用

promise.then 不返还一个 promise 还能用 then 吗

promise.finally 的作用，如何自己实现 finally

promise 原理

webpack 的异步加载如何实现

webpack 的分包策略

跨域方式有什么

jsonp 的原理

csrf 防御手段

cookie 的 samesite 属性作用

js 对象循环引用会导致什么问题

react 如何阻止原生默认事件

react 的 fiber 节点树是什么数据结构，为什么要用这样的数据结构

react 异步渲染原理，优先级如何划分

react hook 有自己做一些自定义的 hook 吗

react key 的原理

react 如何实现函数式调用组件，toast.show()

react 新增了什么生命周和删除了什么生命周期，为什么要删除

node 后端知识

node 对于 option 请求如何处理

node 如何处理 cors 跨域

ES modules 和 commonjs 的区别

node 的 event loop 和浏览器的区别

dns 查询过程，dns 用什么协议发起 dns 查询的

tcp 和 udp 区别

tcp 的三次握手和四次挥手

协商缓存和强缓存的区别

https 协议握手大概过程

对称加密和非对称加密的区别

非对称加密，私钥和公钥的区别

https 证书的作用

其他

-   如何埋点，为什么用 1\*1 像素的 gif 图片做上报
    -   能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
    -   触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
    -   跨域友好
    -   执行过程无阻塞
    -   相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
    -   GIF 的最低合法体积最小（最小的 BMP 文件需要 74 个字节，PNG 需要 67 个字节，而合法的 GIF，只需要 43 个字节）

如何定义首屏

算法

// 从扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这 5 张牌是不是连续的。2 ～ 10 为数字本身，A 为 1，J 为 11，Q 为 12，
K 为 13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

// 示例 1:

// 输入: [1,2,3,4,5]

// 输出: True

// 示例 2:

// 输入: [0,0,1,2,5]

// 输出: True

// 限制：

// 数组长度为 5

// 数组的数取值为 [0, 13] .

## 三面-技术面

早上，视频面试，leader 面试

前端知识

绑定事件有多少种方式

事件触发的流程，捕获和冒泡

捕获阶段能终止吗

终止冒泡阶段有哪些

如果实现 one 绑定事件

事件委托的原理

event.target 和 event.currtager 的区别

浏览器显示一个图片有什么方式

如何获取 url 中的?后的参数

浏览器的内存回收机制 标记清除还是引用计数？

如何解决跨域

什么是简单请求什么复杂请求

const 和 let 有什么区别

ES6 常用的 api 有哪些

数组断引用的方式有什么

Base64 图片有什么问题

node 后端知识

Http 强缓存和协商缓存用的是什么字段，整体流程是怎样

Https 原理

Https 第一次请求会携带什么

Ca 证书的内容是什么

Https2.0 的特性

xss 攻击原理的防御方式

Csrf 攻击原理和防御方式

二进制分帧的具体是什么

Keep alive 和多路复用的区别

Option 请求的作用

Node gc 方式

新生代和老生代的区别

新生代内存地址移动到老生代内存地址的过程

开放问题

长列表优化方案

首屏优化方案

Node 如何保证第三方接口的稳定性

## 四面-GM 面

浏览器从写入 url 到加载完毕的流程

浏览器白屏原因

页面打开后 cpu 和内存快速增长，如何定位问题，可能有什么问题

长列表优化，以及长列表中，如果带搜索功能如何实现

## 五面-技术委员会技术面

最新规定 9 级及以上级别需要 1-5 轮的技术委员会进行加面。

最满意的项目列举 2 个

为什么使用 RN

有 100 匹马，场地只有 4 条跑道，得出最快的 4 只马需要多少轮 Lam：100 匹马，4 个赛道，找出跑最快的 4 匹马。

已知函数 fn1 会随机返回 1-5 的整数，要求基于 fn1 编写 fn2，要随机生成 1-7，fn2 内不能使用系统的随机 api，只能调用
fn1 获取随机数

## 六面-技术委员会技术面

前端的未来发展的一些思考

Serverless 的优缺点，前端的应用范围

页面性能优化

做过的专项的架构图

## 七面-HR 面

为什么离职

你现在公司最有成就感的项目是什么

你现在公司最有挑战的项目是什么，你是如果解决难题的

期望薪酬

因为我以前有其他公司的工作经验，所以需要做性格测试，之后就是等出薪酬方案和 hr 沟通，然后发 offer，offer 后进入
背调，一切通过后进入入职预约流程，之后就等待入职咯~~~。

总体感受

现在前端除了一些基本的面试知识外，明显感觉到算法的考虑在逐步加强，所以也总结一些重点的考点吧。一些很基本的
原理我就不写了，什么闭包，什么原型链

对 JavaScript 的 Api 可以手写。

bind

new

promise

.....

浏览器的加载原理，回流重绘，url 输入后的流程，关键渲染路径等....

框架的原理，了解你最常用的框架的内部原理以及实现，包括思想等。

浏览器和 node 的 GC 原理

浏览器和 node 之间 eventLoop 的区别

webpack 的基本原理

数据库，redis，nginx 的一些基本概念以及基本原理和优化。

对于前端页面的优化方案，包括首屏加载，资源整合，网络优化，长列表优化等

网络安全，xss，csrf，cookies 保护等

网络知识

tcp

https 和 http

dns

udp

算法和数据结构

基本常用排序

链表操作

树结构操作

贪心算法

回溯算法

双指针操作

哈希表

动态规划（一般为加分题）

```

```

```

```

```

```

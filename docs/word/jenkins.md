# jenkins 常用命令

```
cmd:
    net start jenkins            // 启动Jenkins服务
    net stop jenkins             // 停止Jenkins服务

linux:
    #jenkins启动
    service jenkins start

    #重启
    service jenkins restart

    #停止
    service jenkins stop
```


# jenkins 手把手搭建

> <a href="https://github.com/muyinchen/woker/blob/master/集成测试环境搭建/手把手教你搭建Jenkins+Github持续集成环境.md" target="_blank">手把手教你搭建Jenkins+Github持续集成环境</a>  

jenkins配置页面：http://localhost:8080/pluginManager/advanced

如果用的github是私有库，那么配置Repository URL的时候需要加上名称：如下
https://maozongmin@github.com/maozongmin/work.git

# jenkins

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


## jenkins 手把手搭建

先安装java：
```
1.查看可安装java版本。执行成功后可以看见如下的结果
yum -y list java*

2.选择一个java版本进行安装，这里我们希望安装java1.8，因为我们的机器是64位的，所以选择安装java-1.8.0-openjdk-devel.x86_64。 这里有个地方要注意，要选择-devel的安装，因为这个安装的是jdk，而那个不带-devel的安装完了其实是jre。
执行命令
yum install -y java-1.8.0-openjdk-devel.x86_64
```
> <a href="https://github.com/muyinchen/woker/blob/master/集成测试环境搭建/手把手教你搭建Jenkins+Github持续集成环境.md" target="_blank">手把手教你搭建Jenkins+Github持续集成环境</a>  

```
如果启动失败，可以运行如下命令查看错误信息
systemctl status jenkins.service
```

jenkins配置页面：http://localhost:8080/pluginManager/advanced

如果用的github是私有库，那么配置Repository URL的时候需要加上名称：如下
https://maozongmin@github.com/maozongmin/km.git

## Jenkins SSH 远程执行 Shell 脚本
<a href="https://fanlychie.github.io/post/jenkins-remote-ssh.html" target="_blank">https://fanlychie.github.io/post/jenkins-remote-ssh.html</a>

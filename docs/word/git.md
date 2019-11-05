
# git 

## 常用命令
```
    env                             // 查看环境变量
    env |grep proxy                 // 查看代理
    git config -l                   // 查看配置列表
    export no_proxy=github.com      // 取消对github.com代理
    git checkout dev                // 切换到dev分支
    git log                         // 显示git日志
    git pull origin master          // 拉取主分支最新代码 到 当前分支
```

## Git 全局设置
```
    git config --global user.name  "maozongmin"
    git config --global user.email "861463757@qq.com"
```

## 创建一个新仓库
```
    git clone https://github.com/maozongmin/km.git
    cd km
    touch README.md
    git add README.md
    git commit -m "add README"
    git push -u origin master
```


## 已存在文件夹或仓库
::: tip 将本地仓库和github仓库关联起来
git remote add origin https://github.com/maozongmin/km 这里的网址就是仓库的网址
:::
```
    cd existing_folder
    git init
    git remote add origin https://github.com/maozongmin/km.git
    git add .
    git commit -m "init"
    git push -u origin master
```

## 修改上传限制
 ```
git config --global http.postBuffer 157286400（代表设置上传上限大小为150M）
 ```




## 修改远程仓库地址
方法有三种：

1、修改命令
```
git remote set-url origin [url]
```

2、先删后加
```
git remote rm origin
git remote add origin [url]
```

3、直接修改config文件
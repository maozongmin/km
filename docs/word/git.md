# git

## 常用命令

```
    env                                                     // 查看环境变量
    env |grep proxy                                         // 查看代理
    git config -l                                           // 查看配置列表
    git config --global https.proxy http://127.0.0.1:1080   // 设置http代理
    git config --global https.proxy https://127.0.0.1:1080  // 设置https代理
    git config --global --unset http.proxy                  // 取消http代理
    git config --global --unset https.proxy                 // 取消https代理
    export no_proxy=github.com                              // 取消对github.com代理
    git checkout dev                                        // 切换到dev分支
    git log                                                 // 显示git日志
    git pull origin master                                  // 拉取主分支最新代码 到 当前分支
    git push -u origin master                               // 推送上git
```

## Git 全局设置

```
    git config --global user.name  "maozongmin"
    git config --global user.email "861463757@qq.com"
    // 配置密码,输入下面命令，然后pull，输入账号密码，后续再pull就不会要求输入了
    git config --global credential.helper store
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

::: tip 将本地仓库和 github 仓库关联起来
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

3、直接修改 config 文件

## 代码回滚到某 commit

```
git log

git reset –hard 8ff24a6803173208f3e606e32dfcf82db9ac84d8
```

## pull 拉取失败

### git 出现 fatal: refusing to merge unrelated histories 错误

使用：`git pull origin master --allow-unrelated-histories`  
后面加上 --allow-unrelated-histories ， 把两段不相干的 分支进行强行合并,然后提交就可以了

## git 保存账号密码

### 为了不用每次都输入账号密码

```
在git bash交互环境输入命令

git config  credential.helper store

这里没有--global意思是指只对这个仓库生效，建议以后都不要加--global

让代码配置以仓库为单位存储就好，设置成全局不灵活
```

## 解决冲突

### 检出，检查（评审）和本地合并

```
步骤 1. 获取并检出此合并请求的分支

git fetch origin
git checkout -b package_update origin/package_update
步骤 2. 在本地查看更改

步骤 3. 合并分支并修复冲突

git checkout master_test
git merge --no-ff package_update
步骤 4. 将合并结果推送到Git服务器

git push origin master_test
```

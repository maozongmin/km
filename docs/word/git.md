
## git 修改远程仓库地址
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
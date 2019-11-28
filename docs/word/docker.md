# docker
## boot2docker默认用户和密码
<valine></valine>
用户|密码|进入方式
---|:--:|---:
docker|tcuser|ssh

## 常用命令
```
sudo reboot // 重启
docker images // 查看本地镜像
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]       // 创建一个新容器并运行一个命令

docker start [OPTIONS] container [CONTAINER...]     // 启动一个或多个已经被停止的容器 docker start test
docker stop [OPTIONS] container [CONTAINER...]      // 停止一个运行中的容器 docker stop 
docker restart [OPTIONS] container [CONTAINER...]   // 重启容器

docker exec [OPTIONS] CONTAINER COMMAND [ARG...]    // 进入容器执行bash docker exec -it 9df70f9a0714 /bin/bash 
```

## 英文缩写
### 容器命令详解
-i (interactive)
-t (tty)
-d (detach)
-p (port)
exec (excute)

## Docker 命令大全
<a href="https://www.runoob.com/docker/docker-command-manual.html" target="_blank">Docker 命令大全</a>
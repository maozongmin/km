# docker

## boot2docker 默认用户和密码

| 用户   |  密码  | 进入方式 |
| ------ | :----: | -------: |
| docker | tcuser |      ssh |

## 常用命令

```
sudo reboot                                         // 重启

docker search image_name                            // 搜索镜像
docker images                                       // 查看本地镜像
docker rmi image_name                               // 删除镜像

docker run -itd --name="container_name" nginx       // 创建一个新容器
docker start [OPTIONS] container [CONTAINER...]     // 启动一个或多个已经被停止的容器 docker start test
docker stop [OPTIONS] container [CONTAINER...]      // 停止一个运行中的容器 docker stop
docker restart [OPTIONS] container [CONTAINER...]   // 重启容器

docker exec [OPTIONS] CONTAINER COMMAND [ARG...]    // 进入容器执行bash docker exec -it 9df70f9a0714 /bin/bash
```

## 基础操作

### 容器操作

1. 创建容器： `docker run -itd --name="container_name" nginx`
    > -i (interactive) 交互模式运行容器
    > -t (tty) 后台运行容器，并返回容器 ID
    > -d (detach) 为容器重新分配一个伪输入终端
    > --name 为容器指定名称
2. 运行容器： `docker start`
3. 查看容器（运行中的）： `docker ps`
4. 查看容器（包括已停止的）： `docker ps -a`
5. 停止容器：`docker stop container/container_id`
6. 重启容器：`docker restart container/container_id`
   . 删除容器：`docker rm container/container_id`

### 容器的修改及保存

1. 进入容器： `docker exec -it container_id/container_name /bin/bash`
2. 退出容器： `exit`
3. 提交修改： `docker commit -a "author" -m "message" container_id/container_name image_name:tag_name`
   ::: tip 参数说明
    > -a: 可选，用于指定作者  
    > -m: 可选，提交信息  
    > container_id: 被修改的容器 id  
    > image_name: 新镜像名字，可以自定义  
    > tag_name: 新镜像的标签，可不写，默认为 latest
    > :::

### 容器进阶操作

1. 端口映射  
   `docker run -itd -p 宿主机端口号:容器端口号 image_name`

2. 文件挂载  
   `docker run -itd -v /宿主机/文件目录/文件:/容器/目录/文件 image_name`

3. 容器文件复制到本地  
   `docker cp 容器名:/目录/文件 /宿主机目录/文件`

4. 本地文件复制到容器  
   `docker cp /宿主机目录/文件 容器名:/目录/文件`

修改 mysql  
`docker run -itd --name=mysql -p 33066:3306 -v /course/mysql:/var/lib/mysql/ -e MYSQL_ROOT_PASSWORD=root mysql`
修改 mysql 密码 为 root
`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root'`

## Dockerfile

### 介绍
文件中包含 Linux 命令，`docker`通过读取文件中的命令来组件镜像  
一般四部分： `基础镜像信息、维护者信息、镜像操作指令、容器启动时执行指令`

Dockerfile常用指令

- `FROM`: 指定基础镜像，必须为第一个命令

    ```
    格式：
        FROM <image>
        FROM <image>:<tag>
        FROM <image>@<digest>

    示例：
        FROM centos:7.0
    ```
- RUN 执行命令  

    `docker run -d -p 8081:80 mao/ubuntu`

- ADD 添加文件  
- COPY 拷贝文件  
- CMD 执行命令  
- EXPOSE 暴露接口  
- WORKDIR 制定路径  
- MAINTAINER 维护者  
- ENV 设定环境变量  
- ENTRYPOINT 容器入口  
- USER    制定用户  
- VOLUME  提供独立于容器之外的持久化存储   

## 英文缩写

### 容器命令详解

-i (interactive) 交互式操作。
-t (terminal) 终端。
-d (detach)  
-p (port)  
exec (execute)

## Docker 命令大全

<a href="https://www.runoob.com/docker/docker-command-manual.html" target="_blank">Docker 命令大全</a>

## docker 拉取镜像特别慢的解决办法

<img src="https://img-blog.csdnimg.cn/20200130143259716.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjgwNA==,size_16,color_FFFFFF,t_70" />.

添加
`"registry-mirrors":["https://f3lu6ju1.mirror.aliyuncs.com"]`

## 本地连接 docker 虚拟机

使用`ssh docker@<ip>`
默认账号密码在顶部有写

## Window 中的 Docker 拉取 Mysql 镜像 并在本地 Navicate 链接

<a href="https://www.cnblogs.com/afeige/p/10698155.html">Window 中的 Docker 拉取 Mysql 镜像 并在本地 Navicate 链接</a>

## 关键点总结

1. Docker 通过 Linux Namespace 技术对系统资源进行隔离和虚拟化，不同的容器进程绑定不同的命名空间，每个进程只能访问自己命名空间下的资源（文件系统、网络资源、进程号等）
2. Docker 的网络配置，本质上就是通过 Network Namespace 对 容器 和 宿主的 网络资源进行隔离
3. Docker 网络配置有 4 种模式，在启动容器进程时指定：
    - Host 模式，--net="host"，容器和宿主共享同一个 Network Namespace，容器可以直接访问宿主的网络资源，容器内的网络信息（网卡、IP、路由等）和宿主一致
    - Bridge 模式，--net="bridge" -p "Host Port:Container Port"，Docker 为容器分配单独的 Network Namespace，并为容器初始化路由，IP 等基础网络配置，容器和宿主间通过 docker0 网桥进行通信，启动时可以通过 -p 参数指定 宿主 和 容器 的端口映射
    - Container 模式，--net="container"，新启动的容器和一个旧的容器共享 Network Namespace，新容器可以直接访问旧容器的网络资源
    - None 模式，--net="none"，Docker 为容器分配单独的 Network Namespace，但是不为其初始化基础网络配置，需要自己手动配置路由表，网卡等

## 命令

-   查看 Docker 版本：docker -v
-   从仓库获取镜像：docker pull [镜像地址]:[版本]  
     例如 docker pull docker.oa.com:8080/public/docker-hello-world:latest
-   查看本地镜像列表：docker images
-   以 Host 模式启动容器：docker run -d --rm --net="host" [镜像]
-   以 Bridge 模式启动容器：docker run -d --rm -p "[HostPort]:[ContainerPort]" --net="bridge" [镜像]  
     其中 HostPort 是宿主端口，ContainerPort 是容器端口。  
     例如：docker run -d --rm --net="bridge" -p "3004:3003" docker.oa.com:8080/public/docker-hello-world
-   查看运行中的容器列表：docker ps
-   查看容器日志：docker logs [容器 ID]
-   进入容器：docker exec -it [容器 ID] bash
-   从容器中退出：exit
-   停止容器：docker stop [容器 ID]

## docker 安装软件
- `apt-get update && apt-get install procps` 示例： 安装ps

## docker 笔记
复制本地文件进入docker 
docker cp index.html 容器id://usr/share/nginx/html 

保存改动为最新的image
docker commit -m 'fun' 容器id 自定义image名称

通过dockerfile自创docker镜像

### 检查容器，获取容器信息
docker inspect 容器id

### cd / 和 ～ 的区别
cd / 进入根目录  
cd ~ 进入用户家目录，比如root用户就进入到/root，比如zzz用户，就进入到/home/zzz
cd /Users/用户名 就等于 cd ～

### 容器挂载
- 将本地的html目录和容器内的html目录进行同步
docker run -p 80:80 -d -v $PWD/html:/usr/share/nginx/html nginx
  
docker create ：创建一个新的容器但不启动它

-   `apt-get update && apt-get install procps` 示例： 安装 ps

docker tag image_name newImageName 创建新镜像  
ps: `docker tag my/nginx nginx`

docker push image_name 推送镜像

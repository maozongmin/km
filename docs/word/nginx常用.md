# nginx常用命令
```
    start nginx         # 启动
    nginx -s stop       # 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
    nginx -s quit       # 平稳关闭Nginx，保存相关信息，有安排的结束web服务。
    nginx -s reload     # 修改配置后重新加载生效。
    nginx -s reopen     # 重新打开日志文件。
    nginx -c filename   # 为 Nginx 指定一个配置文件，来代替缺省的。
    nginx -t            # 配置文件检测是否正确

    nginx -v            显示 nginx 的版本。

    nginx -V            显示 nginx 的版本，编译器版本和配置参数。

    service nginx stop // 停止
    service nginx start // 启动
    service nginx restart // 重启
```
## nginx无法关闭
### 如果无法关闭ngixn可以试下下列方案
```
    命令行输入： taskkill /F /IM nginx.exe > nul
```

## 403无权限问题
    将整个虚拟主机开启目录流量  
    在location 中加上autoindex为on; 
```
    location / {
            root   C:\xampp\htdocs;
            index  index.html index.htm;
            autoindex on;
    }
```

## 代理到8080端口（proxy_pass）
location / {
    proxy_pass http://127.0.0.1:8080;
}
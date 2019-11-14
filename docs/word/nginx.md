# nginx常用命令
``` nginx
    start nginx         # 启动
    nginx -s stop       # 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
    nginx -s quit       # 平稳关闭Nginx，保存相关信息，有安排的结束web服务。
    nginx -s reload     # 修改配置后重新加载生效。
    nginx -s reopen     # 重新打开日志文件。
    nginx -c filename   # 为 Nginx 指定一个配置文件，来代替缺省的。
    nginx -t            # 配置文件检测是否正确

    nginx -v            # 显示 nginx 的版本。

    nginx -V            # 显示 nginx 的版本，编译器版本和配置参数。

    service nginx stop  # 停止
    service nginx start # 启动
    service nginx restart   # 重启
```
## nginx无法关闭
### 如果无法关闭ngixn可以试下下列方案
```
    命令行输入： taskkill /F /IM nginx.exe > nul
```

## 403无权限问题
    将整个虚拟主机开启目录流量  
    在location 中加上autoindex为on; 
``` nginx
    location / {
            root   C:\xampp\htdocs;
            index  index.html index.htm;
            autoindex on;
    }
```

## 代理到8080端口（proxy_pass）
``` nginx
location / {
    proxy_pass http://127.0.0.1:8080;
}
```
## nginx 配置 https
xxx.pem、xxx.key为证书，需自行下载
``` nginx
server {
    listen 443; 
    server_name www.xxx.com; // 你的域名
    root /var/www/www.xxx.com; // 前台文件存放文件夹，可改成别的
    index index.html index.htm;// 上面配置的文件夹里面的index.html

    ssl on;
    ssl_certificate  xxx.pem;// 改成你的证书的名字
    ssl_certificate_key xxx.key;// 你的证书的名字
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4; #按照这个协议配置 这里不需要更改
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; // 按照这个协议配置 这里不需要更改
    ssl_prefer_server_ciphers on; 

    location / {
        index index.html index.htm;
    }
}
```
### http自动跳转https（可选）
::: warning 
要新加一个server 不要写在listen 443里面，写在里面就一直是https重定向到https，进入死循环。
:::
``` nginx
server {
    listen 80;
    server_name www.xxx.com;// 你的域名
    rewrite ^(.*)$ https://$host$1 permanent;// 把http的域名请求转成https
}
```

配置文件参数             |说明
---                     |---
listen 443	            | SSL访问端口号为443
ssl on	                | 启用SSL功能
ssl_certificate	        | 证书文件
ssl_certificate_key	    | 私钥文件
ssl_protocols	        | 使用的协议
ssl_ciphers	            | 配置加密套件，写法遵循openssl标准

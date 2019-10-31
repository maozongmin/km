
# nginx 配置 https
xxx.pem、xxx.key为证书，需自行下载
```
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
## http自动跳转https（可选）
>要新加一个server 不要写在listen 443里面，写在里面就一直是https重定向到https，进入死循环。
```
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

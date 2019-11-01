# linux
```
    1、vi

        vi 1.txt 会直接创建并打开一个文件1.txt

    2、touch

        touch的作用是更改一个文件或目录的时间。touch 2.txt 如果2.txt不存在，则创建空文件2.txt

    3、echo 

        echo “abcd” > 3.txt 可以直接创建文件3.txt并将abcd写入。

    4、less 、more 、cat 

        三者都是将文件内容输出到标准输出，其中less和more可以分页显示，cat是显示全部。

        三者可以根据已经存在的文件创建新的文件。假设已经存在文件1.txt。

        cat 1.txt > 2.txt

        less 1.txt > 3.txt

        more 1.txt > 4.txt

```

## 保存退出

    1、按:q退出：  
        在任何情况先按键盘上面的ESC按键，接着按冒号：q 回车即可退出。

    2、按:w保存：  
        如图在inster状态下，会有图一红圈的文字，先按ESC退出这个状态，接着在图二按:w回车。回车后直接保存一成一个文件在设定的路径，如图三所示。这个状态下只是将输入的内容保存成为一个文件而不退出软件。再次输入也不会生成第二个文件，因为你还在这个文件里面编辑。

    3、:wq 保存并退出文件：
        通过上面的命令可以知道都是带有冒号开头的，并且q是退出，w保存。那么保存退出呢，自然是:wq.因此在保存要退出的状态下，则只需要按ESC，输入：wq即可。

    4、带有！号的情况下:带有叹号代表的是强制执行的意思
        :w代表保存，在w后面加上叹号:w！代表强制保存。
        :q代表退出，:q！代表强制退出。
        :wq代表保存的同时退出，而:wq!代表强制保存退出。

    5、特殊命令：按ESC按键后，键入:e！恢复上次编辑保存的文件状态。
        例如上次输入的是print 并且按：w保存了。这时候再次编辑这个文件，即使你把原来的保存的print字符串删除了，那么只需要按这个：e！就会恢复这个print字符串。需要注意的是，一旦你按了这个命令，当前输入的文本将会消失不见。

## 文件操作

#### 文件创建
    mkdir test // 创建文件夹
    vi test.txt // 创建文件

### 文件删除

#### Linux 删除文件夹和文件的命令
    rm 删除
    -r 就是向下递归，不管有多少级目录，一并删除
    -f 就是直接强行删除，不作任何提示的意思

    删除文件夹实例：
    rm -rf /var/log/httpd/access
    将会删除/var/log/httpd/access目录以及其下所有文件、文件夹

    删除文件使用实例：
    rm -f /var/log/httpd/access.log
    将会强制删除/var/log/httpd/access.log这个文件

### 文件修改
    
    mv test.log test1.txt // 重命名
    mv test.log testdir // 将test.log移动到testdir目录中

### 压缩解压文件
    
       下载到了一份tar.xz结尾的压缩文件，如下：
    ```
        $xz -d ***.tar.xz

        $tar -xvf  ***.tar
    ```

      可以看到这个压缩包也是打包后再压缩，外面是xz压缩方式，里层是tar打包方式。
      补充：目前可以直接使用 tar xvJf  ***.tar.xz来解压

## 安装node && npm

1.先下载安装包到 /usr/local/tool/nodejs路径下
```
wget https://npm.taobao.org/mirrors/node/v8.0.0/node-v8.0.0-linux-x64.tar.xz
```
2.下载完成后解压
```
tar -xvf  node-v8.0.0-linux-x64.tar.xz
```
3.重命名为node
```
mv node-v8.1.4-linux-x64 node
```
4.配置环境变量
```
vim /etc/profile
```
5.在文件的最后添加
```
#set for nodejs  
export NODE_HOME=/usr/local/tool/nodejs/node  
export PATH=$NODE_HOME/bin:$PATH
```
6.保存退出后执行更新命令
```
source /etc/profile
```
如果不生效，重启系统就可以

7.检测node和npm是否安装成功显示版本号则安装成功
```
# node -v
v8.0.0
# npm -v
5.0.0
```

注：现在 node 和 npm 还不能全局使用，需要做链接 （路径以自己实际情况为准）
```
ln -s /usr/local/tool/nodejs/node/bin/node /usr/local/bin/node 
ln -s /usr/local/tool/nodejs/node/bin/npm  /usr/local/bin/npm 
```
测试是否可以在任何目录下执行 node 和 npm 命令
```
# cd /
# node -v
v8.0.0
```

9.npm配置全局路径  
```
# //配置全局安装路径和缓存路径
cd /usr/local/tool/nodejs
mkdir node_global
mkdir node_cache
npm config set prefix "node_global"
npm config set cache "node_cache"
```

10.npm的包安装分为本地安装（local）、全局安装（global）两种

> 不加-g的话默认是使用本地安装，npm会在执行命令的当前路径下下载安装模块组件。  
> 加上-g的话是使用全局安装，npm会在设置的全局路径下安装。方便统一管理。

```
npm install grunt # 本地安装
npm1 install -g grunt-cli # 全局安装
```
# linux 常用命令
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

### 文件创建
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

0017734cd06a4da19485b2a4b1f70335
https://gitee.com/maozongmin/test123.git
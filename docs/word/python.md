# python
## python后台常驻运行
命令 `nohup python -u main.py > log.out 2>&1 &`

## 查找python占用进程
命令 `ps -aux | grep python`

## 杀死进程
通过kil -9强制杀死进程  
命令 `kill -9 进程id`
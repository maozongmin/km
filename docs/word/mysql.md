# 数据库常用命令
- 创建数据库
`CREATE DATABASE IF NOT EXISTS db_test`

- 查找数据库为db_开头的数据库
`SHOW DATABASES LIKE 'db_%'`

- 选中数据库  
USE 数据库名

- 修改数据库
``` sql
ALTER DATABASE [数据库名] 
    DEFAULT CHARACTER SET gbk  // 设定字符集
    DEFAULT COLLATE gbk_chinese_ci; // 设定校对规则
```

- 删除数据库
`DROP DATABASE IF EXISTS db_test;`

- 显示数据库的存储引擎
`SHOW ENGINES;`

- 显示数据库默认的存储引擎
`SHOW VARIABLES LIKE 'storage_engine%';`

- 创建表
```sql
create table tb_admin(
    id int auto_increment primary key,
    user varchar(30) not null,
    password varchar(30) not null,
    createtime datetime
)
```

- 查看表结构
```sql
show columns from tb_admin from db_admin;
-- 或者
describe tb_admin;
-- 简写
desc tb_admin;
-- 查看某一列的结构信息
desc tb_admin id;
```
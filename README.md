train
========================
### 前端
	cd ng-train
	npm install
	npm run build
### python
	cd py-train/src
	先安装python3 忽略
	然后安装pip 忽略
	----------安装所需要的包--------------
	pip install flask pymysql sqlalchemy
	----------去 mysql_conf 执行sql文件创建库和表-------------
	cd mysql_conf
	mysql -uroot -p < sql-config.sql
	----------执行脚本 向数据库里插入数据-------------
	python3 insert_data.py
	----------执行py脚本 启动web服务-------------
	cd py-train/src/
	nohup python3 query-station.py > my.log &

train
========================
### 前端
	cd ng-train
	npm install
	npm run build
### python
	cd py-train/src
	先安装python3
	然后安装pip
	pip install flask pymysql sqlalchemy
	cd mysql_conf
	mysql -uroot -p < sql-config.sql
	python3 insert_data.py
	cd py-train/src/
	nohup python3 query-station.py > my.log &

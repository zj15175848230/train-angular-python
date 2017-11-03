import pymysql
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
engine = create_engine("mysql+pymysql://root:123456@localhost:3306/train?charset=utf8", echo=True) # 连接数据库



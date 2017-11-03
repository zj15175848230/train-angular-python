import data
from config import engine, sessionmaker
session = sessionmaker(engine)() # 创建游标
for str_name in data.station_name:
    for item in str_name["elements"]:
        session.execute("insert into station_name(title, name, en, s) values(\"{title}\", \"{name}\", \"{en}\", \"{s}\")".format(title=str_name["title"], name=item["name"], en=item["en"], s=item["s"]))
session.commit()
session.close()

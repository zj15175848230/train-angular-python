import json
from flask import Flask
from mysql_conf.config import engine, sessionmaker
session = sessionmaker(engine)() # 创建游标
app = Flask(__name__)

@app.route("/v1/train/query/station_name/<params_s>", methods=["GET"])
def station_name(params_s):
    print(params_s)
    sql_res = session.execute("select name from station_name where s like \"%'{params_s}%\" order by en limit 15".format(params_s=params_s))
    result_name = []
    for item in sql_res.fetchall():
        print(item)
        result_name.append(list(item)[0])
    result = {
        "status": "success",
        "data": result_name
    }
    return json.dumps(result)

@app.route("/", methods=["GET"])
def test():
    return "Hello World!"
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
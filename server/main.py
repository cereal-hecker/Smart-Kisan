from datetime import datetime
import sqlite3
from flask import Flask, request, make_response

app = Flask(__name__)

db = sqlite3.connect("sql.db", check_same_thread=False)
cursor = db.cursor()

cursor.execute(
    "CREATE TABLE IF NOT EXISTS FARMER (phone_number INT PRIMARY KEY, crop_name TEXT, last_prediction DATE)"
)


def monthToPredict():
    """returns the predictable month relative to current month"""
    currentMonth = datetime.now().month

    months = {
        "[11, 12, 1, 2]": "spring",
        "[3, 4]": "summer",
        "[5, 6, 7, 8]": "monsoon",
        "[9, 10]": "winter",
    }

    for keys, values in months.items():
        if currentMonth in eval(keys):
            return values


@app.route("/")
def hello_world():
    """8700877045,WATERMELON,22-10-2020"""
    query = "select sqlite_version()"
    cursor.execute(query)
    result = cursor.fetchone()
    return {
        "sqlite_version": result[0],
        "message": "server is working!",
    }


@app.route("/predict")
def predict():
    number = request.args.get("number")
    if number and len(number) == 10:
        try:
            cursor.execute(f"INSERT INTO FARMER (phone_number) values ({number})")
            db.commit()
            return {"message": "data updated successfully"}
        except Exception:
            return make_response({"message": "parameters not fullfilled"}, 400)
    else:
        return make_response({"message": "parameters not fullfilled"}, 400)


if __name__ == "__main__":
    app.run(host="localhost", port=5000)
    cursor.close()
    db.close()

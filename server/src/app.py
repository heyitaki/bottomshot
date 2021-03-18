import flask
from flask import jsonify, request
from server.src.test import get_moment_data

app = flask.Flask(__name__)
app.config["DEBUG"] = True
data = {}


@app.route("/", methods=["GET"])
def home():
    return {}


@app.route("/getPrices", methods=["GET"])
def get_prices(set_id, play_id):
    return {"prices": get_moment_data(set_id, play_id)}


app.run()

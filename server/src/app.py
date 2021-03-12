import flask
from flask import jsonify, request
from server.src.test import get_min_prices

app = flask.Flask(__name__)
app.config["DEBUG"] = True
data = {}


@app.route("/", methods=["GET"])
def home():
    return {}


@app.route("/getPrices", methods=["GET"])
def get_prices():
    return {"prices": get_min_prices()}


app.run()

import flask
from flask import jsonify, request

from src.test import get_moment_data

app = flask.Flask(__name__)
app.config["DEBUG"] = True
data = {}


@app.route("/", methods=["GET"])
def home():
    return {}


@app.route("/getPrices", methods=["GET"])
def get_prices(url):
    return {"prices": get_moment_data(url)}


app.run()

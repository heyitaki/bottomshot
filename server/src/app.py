import json
from pprint import pprint

import flask
from flask import jsonify, request
from flask_cors import CORS

from topshot import get_moment_data

app = flask.Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
app.config["DEBUG"] = True
cors = CORS(app)
data = {}


@app.route("/", methods=["GET"])
def home():
    return {}


@app.route("/getPrices", methods=["POST"])
def get_prices():
    url = json.loads(request.data.decode("utf-8"))
    response = jsonify(get_moment_data(url))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


app.run()

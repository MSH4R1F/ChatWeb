from flask import Flask, jsonify, request, render_template
from threading import Thread
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import sqlite3
app = Flask('')
socket = SocketIO(app)
CORS(app)

@app.route('/')	
def home():
	return  "I'm alive"

@app.route('/api/add', methods=['GET','POST'])
def login():
    if request.method == "POST":
        data = request.get_json()
        name = data["name"]
        room = data["code"]
        return '', 200
@app.route('/api/message', methods=['GET','POST'])
def messages():
    if request.method == "POST":
        msgdata = request.get_json()
        print(msgdata)
        message = msgdata["message"]
        return jsonify({"message": message})

# @socket.on('message')
# def message(data):
    # print(data)
    # emit('receive_message', data, broadcast=True)


def run():
	app.run(host='0.0.0.0',port=7000)

t = Thread(target=run)
t.start()
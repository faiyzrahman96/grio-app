import sys
from flask import Flask, flash, render_template, redirect, url_for, request, session, abort
import os

app = Flask(__name__)

@app.route('/')
@app.route('localhost:3000/index', methods=['GET','POST'])
def home():
	if not session.get('logged_in'):
		return redirect(url_for('localhost:3000/login.html'))
	else:
		return redirect(url_for('localhost:3000/main.html'))

@app.route('localhost:3000/login', methods=['POST'])
def login():
	if request.form['username'] != 'user@grio.com':
		flash('Invalid Username. Please Try Again.')
	elif request.form['password'] != 'grio1':
		flash('Invalid Password. Please Try Again.')
	else:
		session['logged_in'] = True
	return redirect(url_for('localhost:3000/index.html'))

 
 
if __name__ == "__main__":
	app.run()

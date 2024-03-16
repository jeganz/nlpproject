from flask import Flask, render_template

from flask_cors import CORS

app = Flask(__name__)
CORS(app) 
@app.route('/')
def index():
    return {'its':'home'}

@app.route('/apicall')
def api():
    return {
        'response':'api call success'
    }

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)

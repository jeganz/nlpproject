from flask import Flask,request
from flask_cors import CORS
from Image_extract import extract_text
from model import summariser
from text_to_audio import generateAudio

app = Flask(__name__)
CORS(app)

@app.route("/upload", methods=["POST"])
def upload():
    if 'image' not in request.files:
        return {'error':'no file part'}
    
    file = request.files['image']

    if file.filename == '':
        return {'error':'no file found'}
    
    # Save the file to a desired location or perform other operations
    file.save('uploads/' + file.filename)

    text=extract_text('uploads/' + file.filename)
    return {'response':text}

@app.route("/summarize", methods=["POST"])
def summary():
    data = request.get_json()
    text = data['text']
    summari=summariser(text)
    generateAudio(summari)
    return {'summary':summari}

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)

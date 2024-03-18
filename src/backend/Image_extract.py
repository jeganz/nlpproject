import easyocr

import easyocr

def extract_text(image_path):
    reader = easyocr.Reader(['en'])  # specify the language(s)
    result = reader.readtext(image_path)
    texts = [res[1] for res in result]  # extract only the text from each tuple
    return ' '.join(texts)

print(extract_text('D:/Alex/nlpproject/src/backend/uploads/life-quotes-dolly.jpg'))
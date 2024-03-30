import easyocr

import easyocr

reader = easyocr.Reader(['en'])  # specify the language(s)

def extract_text(image_path):
    result = reader.readtext(image_path)
    texts = [res[1] for res in result]  # extract only the text from each tuple
    return ' '.join(texts)

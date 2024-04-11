# Import the required module for text 
# to speech conversion 
from gtts import gTTS 

def generateAudio(s):
    t1 = gTTS(s)  
    t1.save("summaryaudio.mp3")   
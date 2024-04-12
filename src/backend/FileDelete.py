""" To delete the files on boot """

import os
if os.path.exists("summaryaudio.mp3"):
  os.remove("summaryaudio.mp3")

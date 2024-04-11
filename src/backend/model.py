from transformers import pipeline,AutoTokenizer
import torch

tokenizer = AutoTokenizer.from_pretrained("model/tokenizer-short-summary")
pipe = pipeline("summarization", model="model/pegasus-short-summary",tokenizer=tokenizer,device=torch.device(0))
def summariser(text):
    gen_kwargs = {"length_penalty": 0.8, "num_beams":8, "max_length": len(text)}

    semmeri=pipe(text, **gen_kwargs)[0]["summary_text"]
    l = summary(semmeri)
    l = l.split("<n>")
    l = " ".join(l)
    return l

def summary(s):
    l = s.split()
    for i in range(len(l)-1):
        if l[i] == l[i+1]:
            d = l[0:i+1]
            return " ".join(d)
    else:
        d = l
    return " ".join(d)




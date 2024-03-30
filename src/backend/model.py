from transformers import pipeline,AutoTokenizer
import torch

tokenizer = AutoTokenizer.from_pretrained("model/tokenizer-short-summary")
pipe = pipeline("summarization", model="model/pegasus-short-summary-10-epoch",tokenizer=tokenizer,device=torch.device(0))



sample_text="""
Ozone is an inorganic molecule with the chemical formula O ₃. It is a pale blue gas with a distinctively pungent smell. It is an allotrope of oxygen that is much less stable than the diatomic allotrope O ₂, breaking down in the lower atmosphere to O ₂"""
def summariser(text):
    gen_kwargs = {"length_penalty": 0.8, "num_beams":8, "max_length": len(text)}

    semmeri=pipe(text, **gen_kwargs)[0]["summary_text"]
    return semmeri
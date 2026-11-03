import os

from groq import Groq
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app, resources={
    r"/chat": {
        "origins": ["http://127.0.0.1:5500"]
    }
})

messages = []
clinet = Groq(api_key=os.getenv('GROQ_API_KEY'))

@app.post("/chat")
def chat():
    req = request.get_json()
    if not req:
        return {"error": "Invalid JSON"}, 400

    message = req.get('message', '')
    model = req.get('model', '')
    if not message.strip() or not model:
        return {"error": "message and model are required"}, 400
    
    messages.append({"role": "user", "content": message})
    try:
        response = clinet.chat.completions.create(
            messages=messages,
            model=model,
            temperature=1
        )
        answer = response.choices[0].message.content

        messages.append({"role": "assistant", "content": answer})
        return {"answer": answer}
    except Exception:
        app.logger.exception("Groq request failed")
        return {"error": "Failed to get the response from model"}, 502


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8000, debug=True)



    
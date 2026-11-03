const languageModel = document.querySelector('.combobox-value');

const modelIds = {
    "GPT OSS 120B": "openai/gpt-oss-120b",
    "GPT-OSS 20B": "openai/gpt-oss-20b",
    "GPT-OSS-SAFEGUARD": "openai/gpt-oss-safeguard-20b",
    "LLAMA-PROMPT-GUARD 2-22M": "meta-llama/llama-prompt-guard-2-22m",
    "LLAMA-PROMPT-GUARD 2-86M": "meta-llama/llama-prompt-guard-2-86m",
    "Grok 4.5": "openai/gpt-oss-120b",
    "Grok 4.6": "openai/gpt-oss-120b",
    "Grok 4.7": "openai/gpt-oss-120b",
    "Grok 4.20": "openai/gpt-oss-120b",
    "Qwen-3.8-27B": "qwen/qwen3.8-27b"
};

export async function sendMessageToBackend(message, responseDivision){
    const selectedModel = languageModel.textContent.trim();
    const model = modelIds[selectedModel];

    if(!message)return;

    if (!model) {
        responseDivision.textContent = "Please select a valid model.";
        return;
    }

    responseDivision.textContent = "Thinking..."

    try{
        const response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "message": message,
                "model": model
            })
        });
        
        const data = await response.json();

        if(!response.ok){
            throw new Error(data.error || "Request failed.");
        }

        responseDivision.textContent = data.answer;
    }catch(error){
        responseDivision.textContent = error.message;
    }
}
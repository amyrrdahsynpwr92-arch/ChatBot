const AI_Assistants = document.querySelectorAll('.AI-Assistant')
const mainElement = document.querySelector('main')
const combobox_options = document.querySelector('.language-model .menu')

const assistantBackgrounds = {
    ChatGPT: 'url("../images/ChatGPT.png")',
    Grok: 'url("../images/Grok.png")',
    Meta: 'url("../images/Meta.png")',
    Claude: 'url("../images/Claude.png")',
    Alibaba: 'url("../images/Alibaba.png")'
}

const assistantModels = {
    ChatGPT: [
        "GPT OSS 120B", 
        "GPT-OSS 20B",
        "GPT-OSS-SAFEGUARD"
    ],
    Grok: [
        "Grok 4.5",
        "Grok 4.6",
        "Grok 4.7",
        "Grok 4.20"
    ],
    Meta: [
        "LLAMA-PROMPT-GUARD 2-22M",
        "LLAMA-PROMPT-GUARD 2-86M"
    ],
    Claude: [

    ],
    Alibaba: [
        "Qwen-3.8-27B"
    ]
}

AI_Assistants.forEach((assistant) => {
    assistant.addEventListener('click', function(){
        AI_Assistants.forEach((a) => {
            a.classList.remove('opacity-100')
            a.classList.add('opacity-50')
        })
        assistant.classList.remove('opacity-50')
        assistant.classList.add('opacity-100')
        const assistantName = Object.keys(assistantBackgrounds)
            .find((name) => assistant.classList.contains(name))
        if (assistantName) {
            mainElement.style.setProperty('--assistant-background', assistantBackgrounds[assistantName])
            combobox_options.innerHTML = ''
            assistantModels[assistantName].forEach((asiistantModel, index) => {
                const option = document.createElement('button')
                option.className = 'menu-item'
                option.type = 'button'
                option.dataset.bsValue = index+1
                option.textContent = asiistantModel
                console.log(option)
                combobox_options.appendChild(option)
            })
        }
        // const input_box = document.querySelector('.input-box input')
        // input_box.removeAttribute('placeholder')
        // document.querySelector('.input-box input').placeholder = `Ask `
        // console.log(document.querySelector('.input-box input').placeholder)
        
    })
})
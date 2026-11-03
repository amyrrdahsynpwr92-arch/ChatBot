import { sendMessageToBackend } from "../../Backend/running_models/ModelInterface.js"

const chat_section = document.querySelector('.Chat')
const send_button = document.querySelector('.send-button')
const input_box = document.querySelector('.input-box input')

async function addMessageToChatSection(){
    if(input_box.value.trim()){

        const message = input_box.value.trim();

        const promptAndResponse = document.createElement('div');
        promptAndResponse.className = 'prompt-and-response d-flex flex-column mb-3'


        const prompt_group = document.createElement('div')
        prompt_group.className = 'prompt-group w-auto max-w-p-750 h-auto'

        let prompt_box = document.createElement('div')
        prompt_box.className = 'prompt-box bg-subtle-primary rounded-9 w-auto max-w-p-750 h-auto color-white p-4'
        prompt_box.innerText = input_box.value
        input_box.value = ''
        prompt_group.appendChild(prompt_box)

        let prompt_options = document.createElement('div')
        prompt_options.className = 'prompt-options d-flex flex-row w-auto h-auto'
        prompt_options.innerHTML = `
            <button class="color-subtle-blue border-0 bg-transparent mt-2"><i class="fa-solid fa-copy fs-sm"></i></button>
            <button class="color-subtle-blue border-0 bg-transparent mt-2"><i class="fa-solid fa-arrow-up-from-bracket fs-sm"></i></button>
            <button class="color-subtle-blue border-0 bg-transparent mt-2"><i class="fa-solid fa-pencil fs-sm"></i></button>
        `
        prompt_group.appendChild(prompt_options)
        promptAndResponse.appendChild(prompt_group)

        let responseDivision = document.createElement('div')
        responseDivision.className = 'response-division w-auto max-w-p-750 h-auto color-black p-4 -mt-5'
        promptAndResponse.appendChild(responseDivision)

        chat_section.appendChild(promptAndResponse)

        await sendMessageToBackend(message, responseDivision)

    }
}
send_button.addEventListener('click', addMessageToChatSection)
window.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        addMessageToChatSection()
    }
})
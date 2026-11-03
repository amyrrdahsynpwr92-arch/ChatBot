const toggle_menu = document.querySelector('.fa-bars')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('main')
const new_chat = document.querySelector('.new-chat')
const chat_list = document.querySelector('.recent-chats')

let chats = 3

function toggleMenu(){
    sidebar.classList.toggle('w-percent-5')
    sidebar.classList.toggle('w-percent-20')
    main.classList.toggle('w-percent-80')
    main.classList.toggle('w-percent-95')
    const button = document.createElement('button')
    button.className = 'border-0 bg-transparent'
    const bars = document.createElement('div')
    bars.className = 'fa-solid fa-bars'
    button.appendChild(bars)
    const container = document.createElement('div')
    container.className = 'bot-brand d-flex flex-row mb-9 justify-content-center'
    container.appendChild(button)
    bars.addEventListener('click', toggleMenu)
    if(sidebar.children.length > 1){
        sidebar.innerHTML = ''
        sidebar.appendChild(container)
    }else{
        sidebar.innerHTML = `
            <div class="bot-brand d-flex flex-row mb-9 justify-content-between">
                <h4 class="">AmirBot</h4>
                <div class="buttons">
                    <button class="border-0 bg-transparent"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div class="sidebar-options border-bottom border-1 pb-2">
                <div class="sidebar-option new-chat d-flex flex-row flex-gap-10 cursor-pointer">
                    <i class="fa-solid fa-pen-to-square mt-1"></i>
                    <p>New Chat</p>
                </div>
                <div class="sidebar-option images d-flex flex-row flex-gap-10 cursor-pointer">
                    <i class="fa-solid fa-images mt-1"></i>
                    <p>Images</p>
                </div>
                <div class="sidebar-option schedule d-flex flex-row flex-gap-10 cursor-pointer">
                    <i class="fa-solid fa-clock mt-1"></i>
                    <p>Scheduled</p>
                </div>
                <div class="sidebar-option library d-flex flex-row flex-gap-10 cursor-pointer">
                    <i class="fa-solid fa-folder mt-1"></i>
                    <p>Library</p>
                </div>
                <div class="sidebar-option about-us d-flex flex-row flex-gap-10 cursor-pointer">
                    <i class="fa-solid fa-circle-info mt-1"></i>
                    <p>About US</p>
                </div>
            </div>
            <ul class="recent-chats d-flex flex-column justify-content-start">
                <li class="recent-chat d-flex flex-row align-items-center justify-content-between h-p-25 w-full cursor-pointer py-5 ps-2 rounded-5">
                    chat-num1
                    <div class="item-options d-flex flex-row">
                        <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-ellipsis"></i></button>
                        <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-thumbtack"></i></button>
                    </div>
                </li>
                <li class="recent-chat d-flex flex-row align-items-center justify-content-between h-p-25 w-full cursor-pointer py-5 ps-2 rounded-5">
                    chat-num2
                    <div class="item-options d-flex flex-row">
                        <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-ellipsis"></i></button>
                        <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-thumbtack"></i></button>
                    </div>
                </li>
                <li class="recent-chat d-flex flex-row align-items-center justify-content-between h-p-25 w-full cursor-pointer py-5 ps-2 rounded-5">
                    chat-num3
                    <div class="item-options d-flex flex-row">
                        <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-ellipsis"></i></button>
                        <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-thumbtack"></i></button>
                    </div>
                </li>
            </ul>
        `
        sidebar.querySelector('.buttons').appendChild(button)
    }
}

toggle_menu.addEventListener('click', ()=>{
    toggleMenu();
})
new_chat.addEventListener('click', () => {
    const list_item = document.createElement('li')
    list_item.innerHTML = `
        chat-num${++chats}
        <div class="item-options d-flex flex-row">
            <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-ellipsis"></i></button>
            <button class="bg-transparent border-0 fs-xs color-gray opacity-0"><i class="fa-solid fa-thumbtack"></i></button>
        </div>
    `
    list_item.className = 'recent-chat d-flex flex-row align-items-center justify-content-between h-p-25 w-full cursor-pointer py-5 ps-2 rounded-5'
    chat_list.appendChild(list_item)
})
const display = document.querySelector("#display")
const mainContainer = document.querySelector("#container")

const messageInput = document.createElement("input")
messageInput.setAttribute("id", "message")
display.appendChild(messageInput)

const leftShark = document.createElement("article")
leftShark.setAttribute("id", "leftShark")
mainContainer.appendChild(leftShark)

const rightShark = document.createElement("article")
rightShark.setAttribute("id", "rightShark")
mainContainer.appendChild(rightShark)

const sharkWrangler = () => {
    leftShark.innerHTML = event.target.value
    rightShark.innerHTML = event.target.value
}

messageInput.addEventListener("keyup", sharkWrangler)
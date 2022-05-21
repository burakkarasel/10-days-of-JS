const colorDOM = document.querySelector("#color")

const btnDOM = document.querySelector("#generator")

const bodyDOM = document.querySelector("body")


function generateColor(){
    let newColor = Math.random().toString(16).slice(2, 8)
    colorDOM.innerHTML = "#" + newColor
    colorDOM.style.color = "#" + newColor
    bodyDOM.style.backgroundColor = "#" + newColor
}

btnDOM.addEventListener("click", generateColor)

generateColor()
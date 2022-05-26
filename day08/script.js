const inputDOM = document.querySelector("input")

const resultDOM = document.querySelector("span")


/* setInterval(() => {
    resultDOM.innerHTML = inputDOM.value.length
}, 1); */

inputDOM.addEventListener("keyup", ()=> {
    resultDOM.innerHTML = inputDOM.value.length
})
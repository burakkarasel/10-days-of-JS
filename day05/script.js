const btnDOM = document.querySelector("#btn")

const paraDOM = document.querySelector("#result")

function checkPalindrome(){

    const inputDOM = document.querySelector("#input")

    let permVal = inputDOM.value.toLowerCase()

    let tempVal = permVal.split("").reverse().join("")

    tempVal === permVal ? paraDOM.innerHTML = `${inputDOM.value.toUpperCase()} is palindrome` : paraDOM.innerHTML = `${inputDOM.value.toUpperCase()} is not palindrome`
}

btnDOM.addEventListener("click", checkPalindrome)
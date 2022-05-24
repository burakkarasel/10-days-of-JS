const inputDOM = document.querySelector("#input")

const btnDOM = document.querySelector("#btn")

const ouputDOM = document.querySelector("#output")

btnDOM.addEventListener("click", countVowel)

function countVowel(){
    let vowelCount = 0;
    let word = inputDOM.value.toLowerCase()
    for(let i = 0; i < word.length; i++){
        if(word[i].match(/^[aeiou]$/i)){
            vowelCount++
        }
    }
    ouputDOM.innerHTML = `${inputDOM.value.toUpperCase()} has ${vowelCount} vowels in it !`
}
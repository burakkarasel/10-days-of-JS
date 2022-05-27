const resultDOM = document.querySelector("#result")

const btnDOM = document.querySelector("#btn")

const inputDOM = document.querySelector("#input")




const primeChecker = () => {
    if(+inputDOM.value < 2){
        resultDOM.innerHTML = "Values less than 2 can't be prime number."
    }else if(+inputDOM.value === 2){
        resultDOM.innerHTML = "2 is a Prime Number"
    }else{
        for(let i = 2; i < +inputDOM.value; i++){
            if(!(+inputDOM.value % i)){
                resultDOM.innerHTML = `${inputDOM.value} is not a Prime Number`
                return
            }
        }
        resultDOM.innerHTML = `${inputDOM.value} is a Prime Number`
    }
}

btnDOM.addEventListener("click", primeChecker)
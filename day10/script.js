const heightDOM = document.querySelector("#cm")

const weightDOM = document.querySelector("#weight")

const btnDOM = document.querySelector(".calculator")

const resultDOM = document.querySelector(".result")


const calculateBMI = function(){
    const BMI = weightDOM.value / ((heightDOM.value / 100) ** 2)

    switch(true){
        case BMI <= 18.4:
            resultDOM.innerHTML =`Your BMI is ${BMI.toFixed(1)}(Underweight)`
            resultDOM.style.color = "#FFE189"
            break
        case BMI <= 24.9:
            resultDOM.innerHTML =`Your BMI is ${BMI.toFixed(1)}(Normal)`
            resultDOM.style.color = "#8CD47E"
            break
        case BMI <= 39.9:
            resultDOM.innerHTML =`Your BMI is ${BMI.toFixed(1)}(Overweight)`
            resultDOM.style.color = "#FFB54C"
            break
        default:
            resultDOM.innerHTML =`Your BMI is ${BMI.toFixed(1)}(Obese)`
            resultDOM.style.color = "#FF6961"
    }
}

btnDOM.addEventListener("click", calculateBMI)
const numDOM = document.querySelector("#num");

const generateDOM = document.querySelector("#generator");


const randomNum = () => {
    //Generate num button between 1 and 100
    numDOM.innerHTML = Math.trunc(Math.random()*100 + 1);
}


generateDOM.addEventListener("click", randomNum);

// here im gonna call my func so everytime i opened my site there will be a different number

randomNum()
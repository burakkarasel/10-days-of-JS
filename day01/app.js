const countDOM = document.querySelector("#count");

const buttonsDOM = document.querySelector("#button-container");

buttonsDOM.addEventListener("click", (e)=> {
    if(e.target.classList.contains("add-bt")){
        countDOM.innerHTML++;
        setColor();
    }
    else if(e.target.classList.contains("subtract-bt")){
        countDOM.innerHTML--;
        setColor();
    }
    else if(e.target.classList.contains("reset-bt")){
        countDOM.innerHTML = 0;
        setColor();
    }
})

function setColor(){
    if(countDOM.innerHTML > 0){
        countDOM.style.color = "greenyellow"
    }
    else if(countDOM.innerHTML < 0){
        countDOM.style.color = "orangered"
    }
    else{
        countDOM.style.color = "#fff"
    }
}




// This does the job but its less efficient

// const subDOM = document.querySelector(".subtract-bt");
// const addDOM = document.querySelector(".add-bt");
// const resetDOM = document.querySelector(".reset-bt");



// addDOM.addEventListener("click", () => {
//     countDOM.innerHTML++;
// })
// subDOM.addEventListener("click", () => {
//     countDOM.innerHTML--;
// })
// resetDOM.addEventListener("click", () => {
//     countDOM.innerHTML = 0;
// })
const modalDOM = document.querySelector(".modal")

const openBtn = document.querySelector("#btn")

const closeBtn = document.querySelector(".close")

const modalContentDOM = document.querySelector(".modal-content")

openBtn.addEventListener("click", openModal)

closeBtn.addEventListener("click", closeModal)

// i added closeModal here because you can get rid of the pop up clicking anywhere you want

modalDOM.addEventListener("click", closeModal)

// close button 


function closeModal(e){
    modalContentDOM.classList.add("slide-up")
    setTimeout(()=>{
        modalContentDOM.classList.remove("slide-up")
        modalDOM.style.display = "none"
    },500)
}

// open button

function openModal(e){
    e.preventDefault();
    modalDOM.style.display = "block"
}


// here i added a preventDefault method because my button is in a from an when its submitted it refreshes the website so i needed to prevent that event
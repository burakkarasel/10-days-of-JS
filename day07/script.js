const btnDOM = document.querySelector("#btn");

const cpnDOM = document.querySelector("#input");


const copyText = e => {

    navigator.clipboard.writeText(cpnDOM.value).then(()=>{
        btnDOM.textContent = "Copied!!!";
        setTimeout(() => {
            btnDOM.textContent = "Copy";
        },1500)
    });

};

btnDOM.addEventListener("click", copyText);


// OLD WAY

/* const copyText = e => {

    cpnDOM.select();
    document.execCommand("copy")

    btnDOM.textContent = "Copied!!!";
    setTimeout(() => {
        btnDOM.textContent = "Copy";
    },1500);

} */

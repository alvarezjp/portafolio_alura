const tgname = document.querySelector(".formcontato__input");
console.log(tgname);

const tgboton = document.querySelector(".formcontato__form");
console.log(tgboton);

tgboton.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("ejecuto el boton");
})
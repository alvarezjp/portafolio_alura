const tgform = document.querySelector(".formcontato__text");

function nime (tamaño){
    const nombre = document.getElementById("nombre").value;
    tamaño = nombre.value;
    return tamaño;

}

tgform.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    console.log("Enviado");
    nime();
       
})



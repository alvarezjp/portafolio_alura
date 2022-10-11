const tgboton = document.querySelector(".formcontato__botao");

tgboton.addEventListener("click", () => {
    // evento.preventDefault(); 
    verificacionNombre();
    console.log("Enviado");

})

function verificacionNombre() {
    const nombre = document.getElementById("nombre");
    let mensaje = "";
    if (nombre.value.length == 0) {
        mensaje = " Este campo no puede estar vacio";
    } else {
        if (nombre.value.length >= 1 && nombre.value.length <= 10) {
            mensaje = "El nombre debe ser mayor a 10";
        } else {
            mensaje = "";
        }
    }
    console.log(mensaje);
    nombre.setCustomValidity(mensaje);

}



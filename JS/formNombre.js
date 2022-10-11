const tgboton = document.querySelector(".formcontato__botao");

tgboton.addEventListener("click", (evento) => {
    // evento.preventDefault(); 
    verificacionNombre();
    verificacionCorreo();
    verificacionAsunto();
    verificacionTexto();
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
    nombre.setCustomValidity(mensaje);

}

function verificacionCorreo() {
    let msj = " ";
    const email = document.getElementById("email");
    const emailValido = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/gi;

    if (email.value == 0) {
        msj = "El correo electronico es obligatorio, debe escribir uno"
    } else {
        if (!emailValido.test(email.value)) {
            msj = "Correo invalido, se debe corregir el correo electronico introducido";
        } else {
            msj = "";
        }
    }
    email.setCustomValidity(msj);
}

function verificacionAsunto() {
    const asunto = document.getElementById("asunto");
    let mensaje = "";
    if(asunto.value.length == 0){
        mensaje = "Este campo es obligatorio"
    } else {
        if(asunto.value.length > 50){
            mensaje = " Este campo solo admite 50 caracteres y tu escribiste: " + asunto.value.length;
        } else{
            mensaje = "";
        }
    };
    asunto.setCustomValidity(mensaje);
}

function verificacionTexto(){
    const texto = document.getElementById("texto");
    let mensaje = "";
    if(texto.value.length == 0){
        mensaje = "Este campo es obligatorio"
    } else {
        if(texto.value.length > 300){
            mensaje = " Este campo solo admite 300 caracteres y tu escribiste: " + texto.value.length;
        } else{
            mensaje = "";
        }
    };
    console.log(texto.value);
    texto.setCustomValidity(mensaje);
}

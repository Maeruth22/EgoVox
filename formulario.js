document.body.style.background = "#eaf2e3"
//validacion del formulario en sobreesteblog.html, con sus funciones correspondientes
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var correo = document.getElementById("correo")

function validarDatos(){
    nombre.addEventListener("input", validarNombre)
    apellido.addEventListener("input", validarApellido)
    correo.addEventListener("input", validarCorreo)

    validarNombre()
    validarApellido()
    validarCorreo() 
}
function validarApellido(){
    if(apellido.value == ""){
        apellido.style.backgroundColor = "#f51e0f"
        apellido.setCustomValidity("Ingresa tu apellido!")
    } else {
        apellido.style.backgroundColor = "#a4f00c"
        apellido.setCustomValidity("")
    }
}
function validarNombre(){
    if(nombre.value == ""){
        nombre.style.backgroundColor = "#f51e0f"
        nombre.setCustomValidity("Ingresa tu nombre!")
    } else {
        nombre.style.backgroundColor = "#a4f00c"
        nombre.setCustomValidity("")
    }
}
function validarCorreo(){
    if(correo.value == ""){
        correo.style.backgroundColor = "#f51e0f"
        correo.setCustomValidity("Ingresa tu correo!")
    } else {
        correo.style.backgroundColor = "#a4f00c"
        correo.setCustomValidity("")
    }
}
window.addEventListener("load", validarDatos) //utilizacion del window para la carga de la pagina

function agregarComentario() {
    alert("Gracias por comentar!");
    return true;
 }//funcion que devuelve el alert cuando se presiona el submit
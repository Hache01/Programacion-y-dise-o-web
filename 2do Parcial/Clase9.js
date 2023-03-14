function funcion_limpiar () {
    var nombre = document.getElementById("nombre")
    var correo = document.getElementById("correo")
    var contra = document.getElementById("contra")

    nombre.value = "";
    correo.value = "";
    contra.value = "";
   }     

function funcion_llenar () {
    var nombre = document.getElementById("nombre");
    var correo = document.getElementById("correo");
    var contra = document.getElementById("contra");

    nombre.value = "Fidel";
    correo.value = "afhz80@gmail.com";
    contra.value = "12345";
   }   

function funcion_ocultar() {
       var imagen = document.getElementById("foto");
       imagen.style["display"] = "none";
       
       var boton_ocultar = document.getElementById("ocultar");
       var boton_mostrar = document.getElementById("mostrar");

       boton_ocultar.style["display"] = "none";
       boton_mostrar.style["display"] = "inline";
   }

function funcion_mostrar() {
   var imagen = document.getElementById("foto");
   imagen.style["display"] = "inline";

   var boton_ocultar = document.getElementById("ocultar");
   var boton_mostrar = document.getElementById("mostrar");

   boton_ocultar.style["display"] = "inline";
   boton_mostrar.style["display"] = "none";
}
function detectar_texto(){
    console.log('texto detectado!');
}
function correo_detectado(){
    console.log('correo detectado!');
}
function detectar_desconexión(){
    alert("se detecto desconexión");
}
function detectar_reconexión(){
    alert("Reconectado!!!")
}
funcion_mostrar();
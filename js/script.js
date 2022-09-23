//funcion reloj
function reloj() {
    //obtiene la fecha actual
    var mihora = new Date();
    //guarda la parte de las horas de la fecha
    var horas = mihora.getHours().toString();
    //agrega un 0 si las horas son de 1 digito
    if (horas.length == 1) { horas = "0" + horas; };
    //guarda la parte de los minutos de la fecha
    var min = mihora.getMinutes().toString();
    //agrega un 0 si los minutos son de 1 digito
    if (min.length == 1) { min = "0" + min; }
    //guarda la parte de los segundo de la fecha
    var seg = mihora.getSeconds().toString();
    //agrega un 0 si los segundos son de 1 digito
    if (seg.length == 1) { seg = "0" + seg; }
    //muestra en el input text las horas min y seg
    document.forms[0].mireloj.value = horas + ":" + min + ":" + seg;
}

//llama a la funcion reloj cada medio segundo
r = setInterval("reloj()", 500)

//el reloj es ocultado por defecto
document.getElementById("form_reloj").style.visibility = "hidden";

//funcion que cambia la visibilidad del form del reloj ()y el valor del boton que se clickea
function ver_reloj() {
    if (document.getElementById("form_reloj").style.visibility == "hidden") {
        document.getElementById("form_reloj").style.visibility = "visible";
        document.getElementById("boton_reloj").value = "OCULTAR RELOJ";
    }
    else {
        document.getElementById("form_reloj").style.visibility = "hidden";
        document.getElementById("boton_reloj").value = "VER RELOJ";
    }
}
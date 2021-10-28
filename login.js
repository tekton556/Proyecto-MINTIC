let registros = [];

function validar_capcha(rcaptcha){
    // implementar
       if (rcaptcha == 5) {
        return true;        
    } else {
        window.alert("Error de Capcha");
        return false;
    }
}


function iniciar_sesion(usuario, contrasena, rcapcha) {
    //window.alert(usuario+" " + contrasena +" "+ rcapcha);
    if (validar_capcha(rcapcha)) {
        //window.alert("Entre");
        for (let i = 0; i < registros.length; i++) {
            if ((usuario == registros[i].usuario) && (contrasena == registros[i].contrasena)) {
                //Window.alert("verdadero");
                return  true;
            } else {
                //window.alert("falso");
                return false;
            }
        }
    }else{
        //window.alert("capcha falsa");
        return false;
    }
    // implementar
}

function agregarRegistro(){
    // implementar
    var myForm = document.getElementsByClassName("my_form")[0];

    let data = {
    usuario: document.getElementById("login_nombre_usuario").value,
    contrasena: document.getElementById("login_contrasena").value,
    capcha: document.getElementById("login_captcha").value 
    }
    //validar entradas
    registros.push(data);
    myForm.reset();
}

function validar_nombre_usuario (string) {
    var nombre_usuario = string;
    if ((nombre_usuario.charAt(0) === nombre_usuario.charAt(0).toUpperCase()) && (nombre_usuario!="") && !(nombre_usuario === nombre_usuario.toUpperCase())){
        for (let i = 0; i< nombre_usuario.length; i++) {
            let caracter = nombre_usuario.toUpperCase().charCodeAt(i);
            if(!((caracter >= 65 && caracter <= 90))) {
                    //window.alert("Eror en nombre");
                    return false;
            }
        }
        return true;
    } else {
        //window.alert("Eror en nombre");
        return false;
    }
}

function validar_contrasena(string){
    contrasena_usuario = string;

    if (contrasena_usuario.length >= 6){
        let cM = 0;
        let cN = 0;
        let cm = 0;
        for (let i = 0; i< contrasena_usuario.length; i++) {
            let caracter = contrasena_usuario.charCodeAt(i);
            if(!((caracter >= 65 && caracter <= 90) || (caracter >= 48 && caracter <= 57) || (caracter >= 97 && caracter <= 122))) {
                //window.alert("Contraseña no cumple con las políticas de seguridad 3");
                return false;
            }
            if(caracter >= 65 && caracter <= 90){
                cM = 1;
            }

            if(caracter >= 48 && caracter <= 57){
                cN = 1;
            }

            if(caracter >= 97 && caracter <= 122){
                cm = 1;
            }
        }
        
        if ((cM+cN+cm) != 3){
            //window.alert("Contraseña no cumple con las políticas de seguridad 1");
            return false;
        } else {
            return true;
        }
    } else {
        //window.alert("Contraseña no cumple con las políticas de seguridad 2");
        return false;
    }
}

module.exports.registros = registros;
module.exports.validar_capcha = validar_capcha;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
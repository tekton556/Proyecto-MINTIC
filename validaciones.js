function validar_nombreUsuario(string) {
    let expression = /^[A-Z]+[a-z]+\s?[\w\s+]+$/gm;
    var nombre_usuario = document.getElementById('in_usuario').value;
    let valido= expression.test(nombre_usuario);
    if(!valido){
        return false;
    }
    return true;
    } 
function validar_contrasena(string){
    // let expression2=/^(?=.*[a-zA-Z0-9]){6,}$/gm;
    let expression2=/^[\w\s+]+$/gm;
    let contresana = document.getElementById("in_contrasena").value;
    let validarcon=expression2.test(contresana);
    if(!validarcon){
        return false;
    }else {
        return true; 
    }
    }
module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena=validar_contrasena;
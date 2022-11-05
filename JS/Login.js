/* Modal de instruccion que se muestra al entrar a la
pagina de Login y Registro */
    swal({
        title: "¡Bienvenido a Gonvill!",
        text: "¡Inserta los datos correspondientes!",
        icon: "info",
    }); 
/* Funcion para guardar los datos de la pagina de registro.
Aqui se guardan los datos en su respectiva variable y se mandan 
como parametro a la funcion validar*/
function getData(){
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    validar(nombre, email, password);
}
/* Funcion que valida cada uno de los datos insertados
 por el usuario.
 se valida que: 
 * los valores no sean tan cortos
 * el correo sea valido
 * campos vacios
  */
function validar(nombre, email, password){
    correcto1 = 0;
    if(nombre.length >= 6){
        correcto1+= 1;		
    }else{ 
        swal({
            title: "¡Error!",
            text: "¡Nombre demasiado corto!",
            icon: "error",
        });
        correcto1-= 1;
    }
    if(email.length > 4){
        correcto1+= 1;
    }else if(email.length < 4){
        swal({
            title: "¡Error!",
            text: "¡Correo demasiado corto!",
            icon: "error",
        });
        correcto1-= 1;
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
        correcto1+= 1;
    }else{
        swal({
            title: "¡Error!",
            text: "¡Correo no valido!",
            icon: "error",
        });
        correcto1-= 1; 
    }	
    if(password.length == 0){
        swal({
            title: "¡Error!",
            text: "¡Ups! Olvidaste insertar algunos datos",
            icon: "error",
        });
        correcto1-= 1;		
    }else if(password.length <=4){
        swal({
            title: "¡Error!",
            text: "¡La contraseña es demasiado corta!",
            icon: "error",
        });
        correcto1-= 1;		
    }else{
        correcto1+= 1;
    }
    if(correcto1 == 3){
        swal({
            title: "¡Registrado!",
            text: "¡Bienvenido a Librerías Gonvill!",
            icon: "success",
        });
    }
}
/* Funcion para guardar los datos de la pagina de login.
Aqui se guardan los datos en su respectiva variable y se mandan 
como parametro a la funcion validarLog*/
function getDataLog(){
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    validarLog(email, password);
}
/* Funcion que valida cada uno de los datos insertados
 por el usuario.
 se valida que: 
 * los valores no sean tan cortos
 * el correo sea valido
 * campos vacios
  */
function validarLog(email, password){
    correcto1 = 0;
    if(email.length > 4){
        correcto1+= 1;
    }else if(email.length < 4){
        swal({
            title: "¡Error!",
            text: "¡Correo demasiado corto!",
            icon: "error",
        });
        correcto1-= 1;
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
        correcto1+= 1;
    }else{
        swal({
            title: "¡Error!",
            text: "¡Correo no valido!",
            icon: "error",
        });
        correcto1-= 1; 
    }	
    if(password.length == 0){
        swal({
            title: "¡Error!",
            text: "¡Ups! Olvidaste insertar algunos datos",
            icon: "error",
        });
        correcto1-= 1;		
    }else if(password.length <=4){
        swal({
            title: "¡Error!",
            text: "¡La contraseña es demasiado corta!",
            icon: "error",
        });
        correcto1-= 1;		
    }else{
        correcto1+= 1;
    }
    if(correcto1 == 2){
        swal({
            title: "¡Inicio exitoso!",
            text: "¡Bienvenido a Librerías Gonvill!",
            icon: "success",
        });
    }
}
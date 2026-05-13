class Validacion1 {

    constructor(usuario, password) 
    {
        this.usuario = usuario;
        this.password = password;
    }
    validarusuario()
    {
        if(this.usuario === ""){
            return "Usuario obligatorio";
        }
        if(this.usuario.length < 4){
            return "El usuario debe tener al menos 4 caracteres";
        }
        return "";
    }
    validarpassword(){
        if(this.password === ""){
            return "La contraseña es obligatoria";
        }
        if(this.password.length < 8){
            return "La contraseña debe tener minimo 8 caracteres";
        }
        return "";
    }
}
document.getElementById("loginForm").addEventListener("submit", function(e)
{
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    let validacion = new Validacion1(usuario, password);

    let errorUsuario = validacion.validarusuario();
    let errorPassword = validacion.validarpassword();

    document.getElementById("errorusuario").innerHTML = errorUsuario;
    document.getElementById("errorpassword").innerHTML = errorPassword;

    if(errorUsuario === "" && errorPassword === "")
    {
        document.getElementById("mensaje").innerHTML = " Acceso permitido";
    }
    else{
        document.getElementById("mensaje").innerHTML = "";
    }
});
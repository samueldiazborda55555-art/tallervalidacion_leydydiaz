class CambioContraseña
{
    constructor(actual, nueva, confirmar)
    {
        this.actual = actual;
        this.nueva = nueva;
        this.confirmar = confirmar;
    }

    validar()
    {
        if(this.actual == "")
        {
            return "Ingrese contraseña actual";
        }
        if(this.nueva.length < 8)
        {
            return "La nueva contraseña debe tener mínimo 8 caracteres";
        }
        if(this.nueva != this.confirmar)
        {
            return "Las contraseñas no coinciden";
        }
        return "";
    }
}

document.getElementById("formularioContraseña").addEventListener("submit", function(e){

    e.preventDefault();

    let actual = document.getElementById("Contraseñaactual").value;
    let nueva = document.getElementById("Nuevacontraseña").value;
    let confirmar = document.getElementById("Confirmarcontraseña").value;

    let cambio = new CambioContraseña(actual, nueva, confirmar);

    let error = cambio.validar();

    if(error != "")
    {
        document.getElementById("mensaje").innerHTML = error;
    }
    else
    {
        document.getElementById("mensaje").innerHTML =
        "Contraseña cambiada correctamente";
    }

});
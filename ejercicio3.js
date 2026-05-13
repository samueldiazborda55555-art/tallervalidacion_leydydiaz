class reservas {

    constructor(nombre, personas, fecha, hora) {
        this.nombre = nombre;
        this.personas = personas;
        this.fecha = fecha;
        this.hora = hora;
    }

    validarnombre() {
        if (this.nombre === "") {
            return "El nombre es obligatorio";
        }
        return "";
    }

    validarpersonas() {
        if (this.personas === "") {
            return "El número de personas es obligatorio";
        }
        if (this.personas < 0) {
            return "El numero de personas tiene que ser mayor a 0";
        }
        return "";
    }

    validarfecha() {
        if (this.fecha === "") {
            return "La fecha es obligatoria";
        }
        return "";
    }

    validarhora() {
        if (this.hora === "") {
            return "La hora es obligatoria";
        }
        return "";
    }
}
document.getElementById("reservaForm").addEventListener("submit", function(e) 
{
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let personas = document.getElementById("personas").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    let formu = new reservas(nombre, personas, fecha, hora);

    let errornombre = formu.validarnombre();
    let errorpersonas = formu.validarpersonas();
    let errorfecha = formu.validarfecha();
    let errorhora = formu.validarhora();

    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("errorpersonas").innerHTML = errorpersonas;
    document.getElementById("errorfecha").innerHTML = errorfecha;
    document.getElementById("errorhora").innerHTML = errorhora;

    if(errornombre === "" && errorpersonas === "" && errorfecha === "" && errorhora === "") 
    {
        document.getElementById("mensaje").innerHTML = "Reserva registrada correctamente";
    }
    else{
        document.getElementById("mensaje").innerHTML = "";
    }
});
class Formulariomedico
{
    constructor(nombre, edad, peso, estatura)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.estatura = estatura;
    }

    validarnombre()
    {
        if(this.nombre === "")
        {
            return "El nombre es obligatorio";
        }
        return "";
    }
    validaredad()
    {
        if(this.edad === "")
        {
            return "La edad es obligatoria";
        }
        return "";
    }
    validarpeso()
    {
        if(this.peso === "")
        {
            return "El peso es obligatorio";
        }
        return "";
    }
    validarestatura()
    {
        if(this.estatura === "")
        {
            return "La estatura es obligatoria";
        }
        return "";
    }
    calcularIMC()
    {
        return this.peso / (this.estatura * this.estatura);
    }
}

document.getElementById("registropacientes")
.addEventListener("submit", function(e)
{
    e.preventDefault();

    let nombre = document.getElementById("Nombre").value;
    let edad = document.getElementById("Edad").value;
    let peso = document.getElementById("Peso").value;
    let estatura = document.getElementById("estatura").value;

    let paciente = new Formulariomedico(nombre, edad, peso, estatura);

    let errornombre = paciente.validarnombre();
    let erroredad = paciente.validaredad();
    let errorpeso = paciente.validarpeso();
    let errorestatura = paciente.validarestatura();

    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("erroredad").innerHTML = erroredad;
    document.getElementById("errorpeso").innerHTML = errorpeso;
    document.getElementById("errorestatura").innerHTML = errorestatura;

    if(errornombre !== "" || erroredad !== "" || errorpeso !== "" || errorestatura !== "")
    {
        document.getElementById("mensaje").innerHTML = "";
        return;
    }

    //IMC
    let imc = paciente.calcularIMC();

    let clasificacion = "";

    if(imc < 18.5)
    {
        clasificacion = "Bajo peso";
    }
    else if(imc < 25)
    {
        clasificacion = "Normal";
    }
    else
    {
        clasificacion = "Sobrepeso";
    }

    document.getElementById("mensaje").innerHTML =
    "Nombre: " + nombre + "<br>" +
    "Edad: " + edad + "<br>" +
    "IMC: " + imc.toFixed(2) + "<br>" +
    "Clasificacion: " + clasificacion;
});
class SistemaNotas
{
    constructor(nombre, nota1, nota2, nota3)
    {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    validar()
    {
        if(this.nombre == "")
        {
            return "Ingrese nombre";
        }
        if(this.nota1 < 0 || this.nota1 > 5)
        {
            return "Nota 1 inválida";
        }
        if(this.nota2 < 0 || this.nota2 > 5)
        {
            return "Nota 2 inválida";
        }
        if(this.nota3 < 0 || this.nota3 > 5)
        {
            return "Nota 3 inválida";
        }
        return "";
    }

    calcularPromedio()
    {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    mostrarResultado()
    {
        if(this.calcularPromedio() >= 3)
        {
            return "Aprobado";
        }
        else
        {
            return "Reprobado";
        }
    }
}

document.getElementById("formularionotas").addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("Nombreestudiante").value;
    let nota1 = parseFloat(document.getElementById("Nota1").value);
    let nota2 = parseFloat(document.getElementById("Nota2").value);
    let nota3 = parseFloat(document.getElementById("Nota3").value);

    let estudiante = new SistemaNotas(nombre, nota1, nota2, nota3);

    let error = estudiante.validar();

    if(error != "")
    {
        document.getElementById("mensaje").innerHTML = error;
    }
    else
    {
        document.getElementById("mensaje").innerHTML =
        "Estudiante: " + estudiante.nombre + "<br>" +
        "Promedio: " + estudiante.calcularPromedio().toFixed(2) + "<br>" +
        estudiante.mostrarResultado();
    }

});
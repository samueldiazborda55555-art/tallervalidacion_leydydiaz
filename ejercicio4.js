class Empleado {
  constructor(nombre, cargo, salario, horas) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.salario = salario;
    this.horas = horas;
  }

  validarNombre() {
    if (this.nombre === "") {
      return "El nombre es obligatorio";
    }
    return "";
  }

  validarCargo() {
    if (this.cargo === "") {
      return "El cargo es obligatorio";
    }
    return "";
  }

  validarSalario() {
    if (this.salario === "" || this.salario <= 0) {
      return "El salario debe ser mayor a 0";
    }
    return "";
  }

  validarHoras() {
    if (this.horas === "" || this.horas < 0) {
      return "Las horas extras no son válidas";
    }
    return "";
  }

  calcularSalarioTotal() {

    let pagoExtras = this.horas * 10;
    return Number(this.salario) + pagoExtras;
  }
}
document.getElementById("empleform").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let cargo = document.getElementById("cargo").value;
  let salario = document.getElementById("salario").value;
  let horas = document.getElementById("horas").value;

  let empleado = new Empleado(nombre, cargo, salario, horas);

  let errorNombre = empleado.validarNombre();
  let errorCargo = empleado.validarCargo();
  let errorSalario = empleado.validarSalario();
  let errorHoras = empleado.validarHoras();

  let mensaje = document.getElementById("mensaje");

  if (errorNombre || errorCargo || errorSalario || errorHoras)
  {
        documennt. getElementById("mensaje").innerHTML = errorNombre + "<br>" + errorCargo + "<br>" + errorSalario + "<br>" + errorHoras;
  }
   else {
    let total = empleado.calcularSalarioTotal();

    mensaje.innerHTML = "Registro exitoso <br> Salario total: $" + total;

    document.getElementById("empleform").reset();
  }
});
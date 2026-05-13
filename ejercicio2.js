class ValidacionEstudiante {
  constructor(nombre, email, edad, programa) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.programa = programa;
  }

  validarnombre() {
    if (this.nombre === "") {
      return "El nombre es obligatorio";
    }
    return "";
  }

  validaremail() {
    if (this.email === "") {
      return "El email es obligatorio";
    }
    if (this.email.includes("@") === -1) {
      return "Email inválido";
    }
    return "";
  }

  validaredad() {
    if (this.edad === "") {
      return "La edad es obligatoria";
    }
    if (this.edad <= 14) {
      return "Debes ser mayor de 14 años";
    }
    return "";
  }

  validarprograma() {
    if (this.programa === "") {
      return "El programa es obligatorio";
    }
    return "";
  }
}
document.getElementById("registroForm").addEventListener("submit", function(e)
{
    e.preventDefault();

    //capturar datos

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let programa = document.getElementById("programa").value;

    //crear objeto

    let formulario = new ValidacionEstudiante(nombre, email, edad, programa);
    //validaciones

    let errornombre = formulario.validarnombre();
    let erroremail = formulario.validaremail();
    let erroredad = formulario.validaredad();
    let errorprograma = formulario.validarprograma();

    //mostrar los errores
    document.getElementById("errornombre").innerHTML = errornombre; 
    document.getElementById("erroremail").innerHTML = erroremail;
    document.getElementById("erroredad").innerHTML = erroredad;
    document.getElementById("errorprograma").innerHTML = errorprograma;

    //si no hay errores
    if(errornombre === "" && erroremail === "" && erroredad === "" && errorprograma === "")
    {
        document.getElementById("mensaje").innerHTML = "Registro exitoso";
    }
    else{
        document.getElementById("mensaje").innerHTML = "";
    }
});
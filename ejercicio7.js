class TiendaVirtual
{
    constructor(producto, precio, cantidad)
    {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularSubtotal()
    {
        return this.precio * this.cantidad;
    }

    calcularIva()
    {
        return this.calcularSubtotal() * 0.19;
    }

    calcularTotal()
    {
        return this.calcularSubtotal() + this.calcularIva();
    }

    validar()
    {
        if(this.producto == "")
        {
            return "Ingrese producto";
        }

        if(this.precio <= 0 || isNaN(this.precio))
        {
            return "Precio inválido";
        }

        if(this.cantidad <= 0 || isNaN(this.cantidad))
        {
            return "Cantidad inválida";
        }

        return "";
    }
}

document.getElementById("nombreproducto").addEventListener("submit", function(e){

    e.preventDefault();

    let producto = document.getElementById("Nombre").value;
    let precio = parseFloat(document.getElementById("Precio").value);
    let cantidad = parseInt(document.getElementById("Cantidad").value);

    //objeto 
    let tienda = new TiendaVirtual(producto, precio, cantidad);

    let error = tienda.validar();

    if(error != "")
    {
        document.getElementById("mensaje").innerHTML = error;
    }
    else
    {
        document.getElementById("mensaje").innerHTML =
        "Subtotal: $" + tienda.calcularSubtotal() + "<br>" +
        "IVA: $" + tienda.calcularIva() + "<br>" +
        "Total: $" + tienda.calcularTotal();
    }

});
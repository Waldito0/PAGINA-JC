
function calcularSuma() {
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;

    
    var suma = parseFloat(precio) * parseInt(cantidad);
var precio = 75000;



    document.getElementById("resultado").innerHTML = "TOTAL: " + suma + " COP";
  }
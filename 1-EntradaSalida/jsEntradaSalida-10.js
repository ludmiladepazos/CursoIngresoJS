/* en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , el importe y tambien se debe pedir 
el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, 
el precio final es XXXX"
Alumna Ludmila De Pazos division H , ejercio 2 clase de apoyo sabados*/

function mostrarAumento()
{
	var nombredelproducto;
	var importe;
	var porcentajedescuento;
	var preciofinal;
    var mensaje;
	
	nombredelproducto = document.getElementById("txtIdImporte").value;
	importe = prompt("ingrese importe");
	importe = parseFloat(importe);

	porcentajedescuento = prompt("ingrese porcentaje de descuento");
	porcentajedescuento = parseInt(porcentajedescuento);

	porcentajedescuento = importe * porcentajedescuento / 100;

	preciofinal = importe - porcentajedescuento;

	mensaje = "Usted compro un " + nombredelproducto + " con " + porcentajedescuento + " % " + " el precio final es " + preciofinal + " pesos";

	txtIdResultado.value = mensaje;
}


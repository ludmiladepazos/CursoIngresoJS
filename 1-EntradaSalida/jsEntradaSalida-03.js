/*1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.*/
/*Alumna Ludmila de Pazos division H, Ejercicio clase 1 apoyo*/

function mostrar()

{
	var descripcion;
    var precio;
    var precioconaumento;

    descripcion = prompt("Ingrese Producto");
    precio = document.getElementById("txtIdNombre").value;
    precio = parseInt(precio);

    precioconaumento = precio * 1.3;

    alert(descripcion + " el producto cuesta " + precioconaumento + " pesos.");
    
}





	





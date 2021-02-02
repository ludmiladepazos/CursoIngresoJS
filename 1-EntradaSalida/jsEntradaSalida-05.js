/*
Debemos lograr tomar nombre y edad por ID + apellido y mostrarlos concatenados 
ej.: "Usted se llama José Gonzalez y tiene 66 años" 
alumna ludmila de pazos ejercicio 5bis	*/

function mostrar()
{	
	var nombredelalumno;//por id
	var edaddelalumno;//por id
	var apellidodelalumno;//por prompt

	nombredelalumno = document.getElementById("txtIdNombre").value;
	edaddelalumno = document.getElementById("txtIdEdad").value;
	apellidodelalumno = prompt("ingrese su apellido");
	alert("Usted se llama " + nombredelalumno + " " + apellidodelalumno + " y tiene " + edaddelalumno + " años");
}


/*
Entradas: promt, id.value o document.getElementById("...").value
Procesos: concatenar (+)
Salidas: alert, console.log, document.write, id.value o document.getElementById("...").value
*/


/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
alumna ludmila de pazos, ejercicio numero 3 */
function mostrar()
{
	
	var nombredelalumno;//por id
	var edaddelalumno;// por promt

	nombredelalumno = document.getElementById("txtIdNombre").value;
	edaddelalumno = prompt("ingrese su edad");
	alert("Ud se llama "  + nombredelalumno +  " y tiene "  + edaddelalumno +  " años");


	

}



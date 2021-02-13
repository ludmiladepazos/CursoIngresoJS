/*Alumna ludmila de pazos, division h, ejercicio 05*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("No es adolescente.");
	}
	else
	{
		if(edad < 13)
		{
			alert("No es adolescente")
		}
    }
}
//FIN DE LA FUNCIÓN
/*Al ingresar una edad solo debemos informar si 
la persona NO es adolescente.
txtIdEdad*/
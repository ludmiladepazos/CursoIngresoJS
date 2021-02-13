function mostrar()
{
	var edad;
	var estadocivil;
	estadocivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 18)
	{
		if(estadocivil != "soltero")
		{
			alert("Es muy pequeño para no ser soltero");
		}
	}
	else
	{

	}
}

//FIN DE LA FUNCIÓN
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
 txtIdEdad
 estadoCivil*/
 /*Alumna ludmila de pazos, division h, ejercicio if 07*/

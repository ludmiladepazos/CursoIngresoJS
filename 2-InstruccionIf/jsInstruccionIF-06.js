function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if(edad < 18 && edad > 12)
		{ 
			alert("Es adolescente");
        }
        else
        {
        	alert("Es niño");
        }
	}
}
//FIN DE LA FUNCIÓN

/*Alumna ludmila de pazos , division h
ejercicio if 06
Al ingresar una edad debemos informar si la 
persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) 
 o niño (menor a 13 años).
 txtIdEdad*/
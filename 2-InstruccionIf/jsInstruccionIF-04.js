/* Alumna Ludmila De Pazos,
 division H, ejercicio If 04*/
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 12 && < 18)//if(edad > 12) if(edad < 18)
	{
		alert("Usted es adolescente.");
	}
	/*if(condicion)
	{
		if(condicion)
		{
	
		}
	}*/
}

//FIN DE LA FUNCIÓN
/*txtIdEdad
trabajan por cortocircuito && , || quiere decir
que si el primero da falso ya no evalua al otro*/
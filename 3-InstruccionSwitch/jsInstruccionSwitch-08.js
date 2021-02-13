function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio.");
			break;
		default:
			alert("Hace calor.");
			break;
	}

}//FIN DE LA FUNCIÓN. Alumna ludmila de pazos, division h, ej 08.
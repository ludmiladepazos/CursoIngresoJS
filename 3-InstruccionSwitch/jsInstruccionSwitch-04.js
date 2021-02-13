function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciemre":
			alert("Este mes tiene 31 días.");
			break;
		default:
			alert("Este mes tiene 30 dias.");
			break;
	}
}//FIN DE LA FUNCIÓN
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. Alumna ludmila de pazos, division H, ejercicio 4*/
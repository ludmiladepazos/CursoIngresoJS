function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 o mas días");
			break;
	}
}//FIN DE LA FUNCIÓN
/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
Alumna ludmila de pazos, division h, ejercicio 3*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("A clases!!");
			break;
		case "Julio":
			alert("Sse vienen las vacaciones!");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break;
		default:
			alert("Resto de los meses");
	}


}//FIN DE LA FUNCIÓN
/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
txtIdMes*/
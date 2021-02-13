function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioBase;
	var descuento;
	var aumento;
	var precioFinal;

	precioBase = 15000;
	descuento = 0;
	aumento = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					descuento = 20;
				}
				else
				{
					descuento = 10
				}
			}
			break;
		case "Verano":
			if(destinoIngresado == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					aumento = 20;
				}
				else
				{
					aumento = 10;
				}
			}
			break;
		case "Primavera":
		case "Otoño":
			if(destinoIngresado == "Cordoba")
			{
				precioFinal = precioBase;
			}
			else
			{
				aumento = 10;
			}
			break;
	}
	if(descuento != 0)
	{
		precioFinal = precioBase - (precioBase * descuento/100);
	}
	else
	{
		if(aumento != 0)
		{
			precioFinal = precioBase + (precioBase * aumento/100);
		}
	}
	alert("Precio final $ " + precioFinal);
}
//FIN DE LA FUNCIÓN. Alumna ludmila de pazos, divsion H, ej 09.
/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

txtIdDestino*/
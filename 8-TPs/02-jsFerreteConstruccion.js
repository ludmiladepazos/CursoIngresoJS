/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
 Alumna Ludmila De Pazos Tp2*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadacomprar;

	largo = txtIdLargo.value;
	largo = parseInt(largo);

	ancho = txtIdAncho.value;
	ancho = parseInt(ancho);

	perimetro = 2 * (largo + ancho);
	cantidadacomprar = perimetro * 3;

	alert("Cantidad a comprar " + cantidadacomprar + " metros.");
}
/*txtIdLargo
txtIdAncho
txtIdRadio*/


function Circulo () 
{
	var radio;
	var cantidadacomprar;
	var perimetrocirculo;

	radio = txtIdRadio.value;
	radio = parseInt(radio);

	perimetrocirculo = 2 * Math.PI * radio;
	perimetrocirculo = perimetrocirculo.toFixed(2);
	cantidadacomprar = perimetrocirculo * 3;

    alert("Cantidad a comprar " + cantidadacomprar + " metros.");
}

function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;
     
    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;

    alert("Se necesita " + cemento + " bolsas de cemento y " + cal + " de cal.");

}
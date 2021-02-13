/* De Pazos Ludmila ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var unnumero;
    var otronumero;
    var suma;

    unnumero = txtIdNumeroUno.value;
    otronumero = txtIdNumeroDos.value;

    unnumero = parseInt(unnumero);
    otronumero = parseInt(otronumero);
    suma = unnumero + otronumero;

	alert("La suma es " + suma);	
}

function restar()
{
	var unnumero;
	var otronumero;
	var resta;

	unnumero = txtIdNumeroUno.value;
	otronumero = txtIdNumeroDos.value;
	
    unnumero = parseInt(unnumero);
	otronumero = parseInt(otronumero);
	resta = unnumero - otronumero;

	alert("La resta es " + resta);
	
}

function multiplicar()
{ 
	var unnumero;
	var otronumero;
	var multiplicar;

	unnumero = txtIdNumeroUno.value;
	otronumero = txtIdNumeroDos.value;
	
    unnumero = parseInt(unnumero);
	otronumero = parseInt(otronumero);
	multiplicar = unnumero * otronumero;

	alert("La multiplicacion es " + multiplicar);
	
}

function dividir()
{
	var unnumero;
	var otronumero;
	var dividir;

	unnumero = txtIdNumeroUno.value;
	otronumero = txtIdNumeroDos.value;
	
    unnumero = parseInt(unnumero);
	otronumero = parseInt(otronumero);
	dividir = unnumero / otronumero;

	alert("La division es " + dividir);
	
}


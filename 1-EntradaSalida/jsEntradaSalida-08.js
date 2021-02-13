/* Alumna Ludmila De Pazos Ejercicio 3
3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo
*/

function SacarResto()
{ 
	var numero1;
	var numero2;
	var resultado1;
	var resultado2;
	var resultado3;
	
	numero1 = document.getElementById("txtIdNumeroDividendo").value;
	numero2 = document.getElementById("txtIdNumeroDivisor").value;
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado1 = numero1 + numero2;
	console.log(resultado1);

	resultado2 = (numero1 + numero2) / 2;
	console.log(resultado2);

	resultado3 = numero1 % numero2;
	console.log(resultado3);
}
//txtIdNumeroDividendo txtIdNumeroDivisor
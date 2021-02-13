/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var unnumero;
    var otronumero;
    var suma;
    //entradas
    unnumero = txtIdNumeroUno.value;
    otronumero = txtIdNumeroDos.value;

    //conversiones (parseo)
    unnumero = parseInt(unnumero);
    otronumero = parseInt(otronumero);

    suma = unnumero + otronumero
	alert("La suma es " + suma);
}



/*txtIdNumeroUno
txtIdNumeroDos
convertir las variables a parseo porque asi 
dejan de guardar un texto a un numero
parseFloat para numero con decimal*/
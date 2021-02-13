/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Alumna Ludmila De Pazos tp3*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
	var centigrados;
	//txtIdTemperatura
    Fahrenheit = txtIdTemperatura.value;
    Fahrenheit = parseInt(Fahrenheit);

    centigrados = Fahrenheit - 32;

    alert("Son " + centigrados + " C");  
}

function CentigradosFahrenheit () 
{
	var Fahrenheit;
	var centigrados;
	//txtIdTemperatura
    centigrados = txtIdTemperatura.value;
    centigrados = parseInt(centigrados);

    Fahrenheit = centigrados + 32;

    alert("Son " + Fahrenheit + " F");

}

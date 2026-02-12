

/* Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:
    “Excelente” si el promedio es mayor o igual a 90
    “Bueno” si es mayor o igual a 75
    “Regular” si es mayor o igual a 60
    “Insuficiente” en caso contrario
Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert(). */



let promedio=0;
let suma=0;
for (let i=1; i<=4; i++){
    let nota= parseFloat(prompt("Digite la nota ( de 0 a 100 )"));
    suma=suma+nota;
}
promedio= suma/4;
if(promedio>=90){
    console.log(`Excelente: Resultado: ${promedio}`);
}else
    if(promedio>=75){
       console.log(`Bueno: Resultado: ${promedio}`); 
    }else 
        if(promedio>=60){
            console.log(`Regular: Resultado: ${promedio}`)
        }else {
            console.log(`Insuficiente: Resultado: ${promedio}`)
        }
            
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77

/*
Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:
Su edad
Si es estudiante (“sí” o “no”)
La distancia que recorrerá (en kilómetros)
Reglas del costo:
Menores de 18 pagan 50% del precio base
Estudiantes pagan 75% del precio base
Mayores de 60 pagan 40% del precio base
Si el viaje es mayor a 30 km, se agrega un 10% adicional al total
Instrucciones:
Usa condiciones anidadas (if, else if, else) y 
operadores lógicos para determinar el costo final.
*/

/*
alert("EJERCICIO 2")
const precioBase = 10;
let costoFinal = 0;
let edad = parseInt(prompt("Digite su edad:"));
let estudiante = prompt("Es estudiante? digite Y o N");
let distancia = parseInt(prompt("Digite cuántos Km va a recorrer:"));

if (edad < 18 && distancia <= 30) {
    costoFinal = (precioBase * 0.5);//menor de edad y distancia <=30km
    console.log(`Usted debe pagar ${costoFinal}`);
} else
    if (edad < 18 && distancia > 30) {
        costoFinal = (precioBase * 0.5) * 1.10;//menor de edad y distancia >30km
        console.log(`Usted debe pagar ${costoFinal}`);
    } else
        if (edad >= 18 && edad <= 60) {
            if ((estudiante === "y" || estudiante === "Y") && distancia <= 30) {
                costoFinal = (precioBase * 0.75);//es estudiante y distancia <=30km
                console.log(`Usted debe pagar ${costoFinal}`);
            } else
                if ((estudiante === "y" || estudiante === "Y") && distancia > 30) {
                    costoFinal = (precioBase * 0.75) * 1.10;//es estudiante y distancia >30km
                    console.log(`Usted debe pagar ${costoFinal}`);
                } else
                    if (estudiante === "n" && distancia <= 30) {
                        costoFinal = (precioBase);//persona sin descuento y <=30km
                        console.log(`Usted debe pagar ${costoFinal}`);
                    } else
                        if (estudiante === "n" && distancia > 30) {
                            costoFinal = (precioBase) * 1.10;//persona sin descuento y >30km
                            console.log(`Usted debe pagar ${costoFinal}`);
                        }
        } else
            if (edad > 60 && distancia <= 30) {
                costoFinal = (precioBase * 0.4);//mayor de 60 y distancia <=30km
                console.log(`Usted debe pagar ${costoFinal}`);
            } else
                if (edad > 60 && distancia > 30) {
                    costoFinal = (precioBase * 0.4) * 1.10;//mayor de 60 y distancia <=30km
                    console.log(`Usted debe pagar ${costoFinal}`);
                } else {
                    console.log("ingrese un valor valido");
                }

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Ejercicio 3 – Menú de Conversión de Unidades
Muestra un menú con 4 opciones:
Convertir de Celsius a Fahrenheit
Convertir de Fahrenheit a Celsius
Convertir de Metros a Kilómetros
Convertir de Kilómetros a Metros
El usuario debe elegir una opción y escribir el valor a convertir.
El programa mostrará el resultado correspondiente.
Instrucciones:
Usa switch-case para realizar las conversiones y prompt() para las entradas.
*/

/*
let fahrenheit=0;
let centigrado=0;
let metro=0;
let kilometro=0;
let opcion= parseInt (prompt(`Escoja una opción
    1 Convertir de Celsius a Fahrenheit
    2 Convertir de Fahrenheit a Celsius
    3 Convertir de Metros a Kilómetros
    4 Convertir de Kilómetros a Metros`));

switch (opcion) {
    case 1:
        centigrado=parseFloat(prompt("Por favor ingrese los grados celsius"));
        fahrenheit=(centigrado*9/5)+32;
        alert(`${centigrado} grados centígrados equivalen a ${fahrenheit} fahrenheit `);
        break;

    case 2:
        fahrenheit=parseFloat(prompt("Por favor ingrese los grados fahrenheit"));
        centigrado= (fahrenheit-32)*5/9;
        alert(`${fahrenheit} grados fahrenheit equivalen a ${centigrado} centígrados`);
        break;

    case 3:
        metro=parseFloat(prompt("Por favor ingrese los metros"));
        kilometro=metro/1000;
        alert(`${metro} metros equivalen a ${kilometro} kilometros`);
        break

    case 4:
        kilometro=parseFloat(prompt("Por favor ingrese los kilometros"))
        metro=kilometro*1000;
        alert(`${kilometro} kilometros equivalen a ${metro} metros`)
        break

    default:
        alert("Por favor ingrese una opción valida")
        break;
}

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Ejercicio 4 – Sistema de Descuentos en una Tienda
El usuario debe ingresar:
El precio total de su compra
Si tiene tarjeta de cliente frecuente (“sí” o “no”)
Reglas:
Si el total es mayor a 500, aplica un 10% de descuento
Si además tiene tarjeta, aplica un 5% adicional
Si el total es menor o igual a 100, aplica un recargo del 5%
El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.
Instrucciones:
Utiliza operadores de asignación y condiciones anidadas para determinar el total.

*/


/*
let precioTotalCompra = parseFloat (prompt("Ingrese el precio total de su compra"));
let tarjeta = prompt ("Tiene tarjeta de cliente frecuente digite: si o no");

if(precioTotalCompra>500){
    if(tarjeta==="si"){
        precioTotalCompra -= precioTotalCompra*0.15;
        alert(`Ud debe pagar ${precioTotalCompra} 
            se le aplicó un descuento total del 15%
            10% por compra mayor a 500
            5% por tener tarjeta frecuente`);
    }else{
        precioTotalCompra-= precioTotalCompra*0.10;
        alert(`Ud debe pagar ${precioTotalCompra}
            se le aplicó un descuento del 10%
            por compra mayor a 500`);
    }
}else
    if(precioTotalCompra<=100){
        if(tarjeta==="si"){ 
            alert(`Ud debe pagar ${precioTotalCompra} 
            Por compras de 100 o menos ud debería 
            pagar un recargo del 5%, pero te salvaste 
            porque tienes tarjeta de cliente frecuente`);
        }else{
            precioTotalCompra += precioTotalCompra * 0.05;
        }        
    }else
        if(precioTotalCompra>100 && precioTotalCompra<=500){
            alert(`Ud debe pagar ${precioTotalCompra} 
            adquiera su tarjeta de cliente frecuente y adquiera
            un descuento del 5%`)
        }else{
            alert("ingrese un valor válido")
        }

*/
// Para el caso de si tiene o no tarjeta podemos mejorar agregando validaciones en caso
// de que el usuario marque un valor diferente a "si" o "no"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ejercicio 5 – Calculadora de Edad y Etapa de Vida
Pide al usuario:
    Su año de nacimiento
    El año actual
Calcula su edad y muestra un mensaje según el rango:
    Menor de edad: menos de 18 años
    Adulto joven: entre 18 y 30 años
    Adulto: entre 31 y 59 años
    Adulto mayor: 60 años o más
BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.
Instrucciones:
Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos.
*/

/*
let anoNacimiento = parseInt (prompt ("Ingrese su año de nacimiento"));
let anoActual = parseInt ( prompt ("Ingrese el año actual"));

let edad = anoActual - anoNacimiento;
if (edad>0 && edad<18){
    alert("Es menor de edad");
}else
    if(edad>=18 && edad<=30){
        alert("Es adulto jóven");
    }else
        if(edad>=31 && edad<=59){
            alert("Es Adulto");
        }else
            if(edad>=60){
                alert("Es Adulto mayor");
            }else{
                alert("Ingrese un valores válidos");
            }

*/
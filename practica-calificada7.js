
/*
Ejercicio 1 – Área de triángulos múltiples
Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:
Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.
Usa un bucle for para solicitar los datos 3 veces.
Usa condicional para verificar que base y altura sean mayores que 0.
Muestra cada área en consola.
*/


function calcularAreaTriangulo (base, altura){
    let area = base * altura /2
    return area
}
 
for (let i=1; i<=3; i++) {
    let base = parseFloat (prompt("Ingrese el valor de la base:"))
    let altura = parseFloat (prompt("Ingrese el valor de la altura"))
    if(base>0 && altura>0){
        console.log(calcularAreaTriangulo(base,altura))
    }
    
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Ejercicio 2 – Conversión de Celsius a Fahrenheit
Crea una función convertirAFahrenheit que reciba un valor en Celsius y lo convierta a Fahrenheit:
Pide al usuario 5 temperaturas mediante prompt.
Usa un bucle para hacer las 5 conversiones.
Usa un condicional para verificar que el valor ingresado sea un número.
Muestra cada resultado en consola.
*/

/*
function convertirAFahrenheit (gradosCelsius){
    return (gradosCelsius*9/5)+32
}

for (let i=1; i<=5; i++) {
    let celsius = parseFloat (prompt("Ingrese los grados celsius"))    
    if(celsius<0 || celsius>=0){
        console.log(convertirAFahrenheit(celsius))
    }   
}

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ejercicio 3 – Contar vocales en un texto
Crea una función contarVocales que reciba un texto y devuelva el número de vocales:
Pide al usuario 3 textos mediante prompt.
Usa un bucle para recorrer cada letra del texto.
Usa condicionales para determinar si un carácter es vocal.
Muestra en consola cuántas vocales tiene cada texto.
*/
/*

function contarVocales (cadenaTexto){
    let contadorVocales=0
    let texto=cadenaTexto
    for (let i=0 ; i < texto.length ; i++){
        let caracter=texto.charAt(i).toLowerCase() // charAt(i) => devuelve caracter de la posicion 0 .toLowerCase() => lo convierte en minuscula
        if(caracter==="a" || caracter==="e" || caracter==="i" || caracter==="o" || caracter==="u"){
            contadorVocales++
        }        
    }
    return contadorVocales
}

for (let i=1 ; i<=3 ; i++){
    let cadenaTexto = prompt("ingrese una cadena de caracteres para verificar cuantas vocales tiene, solo use minusculas")
    console.log(`el texto: ${cadenaTexto} tiene ${contarVocales(cadenaTexto)} vocales `)
}

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ejercicio 4 – Pares e impares en un rango
Crea una función clasificarParesImpares que reciba dos números inicio y fin y:
Use un bucle for para recorrer todos los números desde inicio hasta fin.
Use condicional para imprimir si cada número es par o impar.
Pide al usuario inicio y fin mediante prompt.
Muestra el resultado en consola.
*/
/*

function clasificarParesImpares (inicio, fin){
    for (let i=inicio ; i <= fin ; i++){
        if(i%2 === 0){
            console.log(`${i} es par`)
        }else {
            console.log(`${i} es impar`)
        }
    }

}


let inicio = 0
let fin = 0
let num1 = parseInt (prompt ("Ingrese el número de INICIO"))
let num2 = parseInt (prompt ("Ingrese el número de FIN"))
if(num1 < num2){
    inicio = num1
    fin = num2
}else{
    inicio = num2
    fin = num1
}

clasificarParesImpares(inicio, fin)

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Ejercicio 5 – Número mayor y suma
Crea una función mayorYSuma que reciba 5 números separados y:
Use un bucle para comparar cada número y encontrar el mayor.
Use condicionales para verificar cuál es el mayor.
Calcula también la suma de los 5 números.
Pide al usuario los 5 números mediante prompt.
Muestra en consola el número mayor y la suma total.
*/
/*

function mayorYSuma (){
    let suma=0
    let mayor=0
    
    for(let i=1; i<=5; i++){
        let numero = parseFloat (prompt ("Ingrese el numero"))
        if(numero>mayor){
            mayor=numero
        }
        suma=suma+numero
        

    } 
    console.log(`El número mayor es ${mayor}`)
    console.log(`La suma total es ${suma}`)   

}
mayorYSuma()

*/
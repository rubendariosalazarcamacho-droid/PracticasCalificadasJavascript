/*
ATM - Cajero Automatico
 Tiene un limite de 3 intentos
 usuario: Funval
 contraseña : Progra123
 Saldo Inicial = $1000
 Debe desplegar un menú de opciones como:
 Retirar - Solo se puede retirar una cantidad menor al Saldo Actual
 Depositar
 Ver Saldo
 Salir
 un bucle que hasta que el usuario no elija la opción "Salir" pueda continuar sugiriendo hacer otras operaciones.
 */

const usuario = "Funval";
const clave = "Progra123";
let intentos = 0;
let saldoInicial = 1000;
let opcion = 0;
let retiro = 0;
let Depositar = 0;
let accesoPermitido = false; //esta es mi variable que cree para salir por completo del programa, 
                            // luego de haber podido entrar y poder hacer transacciones

while (intentos < 3 && accesoPermitido===false) {
    let userGuest = prompt("ingrese su usuario");
    let claveGuest = prompt("ingrese su contraseña");
    if (userGuest === usuario && claveGuest === claveGuest) {
        do {
            accesoPermitido = true; // acceso permitido cambia de estado, eso hace que no repita mas el ciclo while al salir

            opcion = parseInt(prompt(`Ingrese la opción de la operación a realizar:
        1 Retirar
        2 Depositar
        3 Ver Saldo
        4 Salir`));
            switch (opcion) {
                case 1:
                    retiro = parseFloat(prompt("ingrese la cantidad a retirar"));
                    if (retiro <= saldoInicial) {
                        alert(`Ud ha retirado ${retiro}`);
                        saldoInicial = saldoInicial - retiro;
                    } else {
                        alert("Su saldo es insuficiente");
                    }
                    break;

                case 2:
                    Depositar = parseFloat(prompt("Ingrese la cantidad a depositar"));
                    saldoInicial = saldoInicial + Depositar;
                    alert(`Su nuevo saldo es ${saldoInicial}`);

                    break;

                case 3:
                    alert(`Su saldo actual es ${saldoInicial}`);

                    break;

                case 4:
                    alert("hasta la proxima");

                    break;

                default:
                    alert("Digite una opción valida")
                    break;
            }

        } while (opcion != 4);

    }else {
        intentos++;
        if(intentos<3){
            alert("Credenciales incorrectas");
        }else{
            alert("credenciales incorrectas comuniquese con su banco")
        }
    }
}





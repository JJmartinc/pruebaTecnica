
// var dia = 30/09/2022
// let nacimiento = prompt("Introduce tu fecha de nacimiento " )
// var corte = 30/09/2005
// if ( nacimiento <= corte && dia > corte){
//     alert("Puedes sacarte el cuil")
// } else {
//     alert("No puedes sacarte el cuif por que eres menor")
// }

// function menormayor() {
//     let hoy = 30/09/2022
//     let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento: ")
//     let edad = hoy - fechaNacimiento //Al restarlo sabemos la edad del usuario
//     let diferenciaMeses = hoy - fechaNacimiento
//     if (
//       diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy) < fechaNacimiento))
//     ) {
//       edad--
//     }
//     return edad
//   }
var minimo = (30, 09, 2005)
var cumple = prompt("Introduce tu fecha de nacimiento");
var actual = (30,09, 2022);
var diacumple
var mescumple
var añocumple

var diahoy
var meshoy
var añohoy

var dias
var meses
var años

diacumple = cumple.substring(0,2);
mescumple = cumple.substring(3,5);
añocumple = cumple.substring(6,10);

diahoy = actual.substring(0,2);
meshoy = actual.substring(3,5);
añohoy = actual.substring(6,10);


dias = diahoy - diacumple;
meses = meshoy - mescumple;
años = añohoy - añocumple;


if(meses < 0){
    años = años -1;
}else if (meses == 0){
    if (dias > 0)
    años = años -1;
}

console.log(años)
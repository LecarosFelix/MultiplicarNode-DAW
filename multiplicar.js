const fs = require('fs');
const colors = require('colors');



function factorial (n) {
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total; 
}
///Funcion de ImprimirUnaFactorizacion
function imprimirfactorizacion(numerofactorizado){
var numeros=!${numerofactorizado} = ;

for (var i = 1; i <= numerofactorizado; i++) {
    if(i!=numerofactorizado)
    numeros+=i+' X ';
    else
    numeros+=i+ = ${factorial(numerofactorizado)};
 
}
return numeros;
}
///Funcion de Imprimir la tabla entera de factorizacion
function imprimirTabla(limitenumeros){
    console.log(TABLA DE FACTORIAL DE LIMITE ${limitenumeros})
    for (var i = 1; i <= limitenumeros; i++) {

        console.log(imprimirfactorizacion(i));

    }
}
//

    console.log(imprimirTabla(8));
  //console.log(imprimirfactorizacion(5))
   // console.log(!${numero} = =1)

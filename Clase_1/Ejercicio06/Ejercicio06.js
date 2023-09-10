"use strict";
/* 6. Realizar una función que reciba como parámetro un número y que retorne el cubo del
mismo.
Nota: La función retornará el cubo del parámetro ingresado. Realizar una función que
invoque a esta última y permita mostrar por consola el resultado. */
console.log(cubo(10));
function cubo(numero) {
    let resultado;
    if (numero != null) {
        resultado = numero * numero * numero;
    }
    return resultado;
}
//# sourceMappingURL=Ejercicio06.js.map
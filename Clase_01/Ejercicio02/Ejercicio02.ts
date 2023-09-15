/* Cree una aplicación que muestre, a través de un Array, los nombres de los meses de un
año y el número al que ese mes corresponde. Utilizar una estructura repetitiva para
escribir en la consola (console.log()). */

var array = Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiempre","Octubre","Nomviembre","Diciembre")

for (let index = 0; index < array.length; index++) {
    var mes = index +1;
    console.log(array[index] + " " + mes) ;
}
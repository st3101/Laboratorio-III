/* 4. Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar, siendo 5 el número recibido como parámetro. */

console.log(parImpar(5));

function parImpar(numero:number)
{
    let text = "Numero invalido";

    if(numero != null && typeof numero === "number")
    {
        if(numero % 2 == 0)
        {
            text = "El numero: "+numero+" es par";
        }
        else
        {
            text = "El numero: "+numero+" es impar";
        }
    } 

    return text;
}
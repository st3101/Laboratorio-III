/* 3. Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional
de tipo cadena. Si el segundo parámetro es recibido, se mostrará tantas veces por
consola, como lo indique el primer parámetro. En caso de no recibir el segundo
parámetro, se mostrará el valor inverso del primer parámetro. */

mensaje(-5,);
mensaje(10,"Chau");

function mensaje(cantidad:number,texto:string = "Hola")
{
    if(texto !== "Hola")
    {
        for(let i = 0;i<cantidad;i++)
        {
            console.log(texto);
        }
    }
    else
    {
        console.log(-cantidad);
    }
}
  
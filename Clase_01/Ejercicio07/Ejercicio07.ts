/*7. Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log()*/

console.log("HOLA");

let cantNumeroPrimos = 0;
let i=0;
let flag=0;

while (cantNumeroPrimos <= 20 ) 
{
    flag=0;
    for (let index = 0; index < i; index++) 
    {
        if(i/index != 0)
        {
            flag=0;
            continue;
        }
        
        if(index == i)
        {
            break;
        }
        flag = 1;
    }

    if(flag == 1)
    {
        cantNumeroPrimos++;
        console.log(i);
    }

    i++;
}
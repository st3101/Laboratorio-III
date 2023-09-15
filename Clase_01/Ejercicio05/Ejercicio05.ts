/* 5. Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas
como parámetro de la función MostrarNombreApellido, que mostrará el apellido en
mayúscula y el nombre solo con la primera letra en mayúsculas y el resto en minúsculas.
El apellido y el nombre se mostrarán separados por una coma (,).
Nota: Utilizar console.log()*/

let nombre = "santiago";
let apellido = "leonardi";

console.log(MostrarNombreApellido(nombre,apellido));

function MostrarNombreApellido(nombre:string,apellido:string)
{
    let nombreCompleto:String = "Nombre invalido";
    let bufferNombre:string;

    if(nombre != null && apellido != null)
    {
        nombreCompleto = apellido.toUpperCase();
        nombre = nombre.toLowerCase(); 
        nombreCompleto += " "+ nombre.charAt(0).toUpperCase()+nombre.slice(1);
    }

    return nombreCompleto;
}

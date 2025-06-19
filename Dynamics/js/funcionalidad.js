const nombres = ["Elefante","Camello","Caballo"];//Arreglo de prueba
const aBuscar = document.getElementById("Busqueda");//Variable para obtener el input
let despliega = false;//Variable para mostrar un espacio donde se ven los resultados de la busqueda(por default se marca como false)

aBuscar.addEventListener("input", e=>//Se acciona el evento cuando el input cambia
{
    let origen = e.srcElement;//obtiene el objeto que origino el evento(debe ser el input)
    let long = origen.value.length;//Obtine la longitud de lo puesto en el input
    let removedor;
    
    if(long == 1 && !despliega)//Si despliegue no esta marcado como false crea un div que despliega la busqueda encontradas
    {
        despliega = document.createElement("div");
        despliega.setAttribute("id", "Despliegue");
        origen.parentElement.append(despliega);
    }
    else if(long == 0)//Si ya no hay más caracteres en el input se borra el área de despliegue y se marca como false(que no existe)
    {
        origen.parentElement.removeChild(despliega);
        despliega = false;
    }

    if(despliega)
    {
        //Se crea un HTML collection que sirve para obtener todos los resultados de la busqueda
        removedor = despliega.querySelectorAll("span");

        if(removedor.length != 0)//Borra todos los resultados de la busqueda
        {
            for(let i=0; i<removedor.length; i++)
            {
                removedor[i].parentElement.removeChild(removedor.item(i));
            }
        }

        for(let i=0; i<nombres.length; i++)//Crea y añade al área de desspliegue todos los resultados de la busqueda
        {
            if(nombres[i].includes(origen.value))
            {
                let resultado = document.createElement("span");
                resultado.textContent = nombres[i];
                resultado.setAttribute("class", "Resultados");
                despliega.append(resultado);
            }
        }

        if(despliega.querySelectorAll("span").length == 0)//Si no hay resultados en la busqueda se pone un mensaje indicando que no se encontró lo buscado
        {
            let resultado = document.createElement("span");
            resultado.textContent = "No encontrado";
            resultado.setAttribute("class", "Resultados");
            despliega.append(resultado);
        }
    }
});
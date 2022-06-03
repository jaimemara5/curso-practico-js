function calcularPromedio (lista){
    
    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

// const lista = [
//     100,
//     200,
//     3002,
//     200,
//     120,
//     400,
// ];
function calcularMediana(lista){

lista.sort((a,b)=> a - b);

const mitadLista = parseInt(lista.length / 2);

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

let mediana;

if (esPar(lista.length))
{
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const promedioElem1y2 = calcularPromedio([elemento1,elemento2]);
    mediana = promedioElem1y2;
}
else 
{
    mediana = lista[mitadLista];
}
    return mediana;
}
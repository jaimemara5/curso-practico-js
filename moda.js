// const lista1 = [
// 1,
// 2,
// 5,
// 1,
// 4,
// 1,
// ];

function onClickButtonLlenar() {
    const input = document.getElementById("InputValor");
    const elemento = input.value;
    const moda = calcularModa(elemento);

    const resultP = document.getElementById("Resultado");
    resultP.innerText = "La moda es: " + moda;
    
}
 
function onClickButtonModa() {
    const moda = calcularModa(listaValue);

    const resultP = document.getElementById("Resultado");
    resultP.innerText = "La moda es: " + moda;
}

function calcularModa(lista)
{
const listaCount = {};

lista.map(
    function (elemento) {
    if (listaCount[elemento]) {
        listaCount[elemento] += 1;
    }else {
    listaCount[elemento] = 1;
    }
});

const listaArray = Object.entries(listaCount).sort(
    function (valorAcomulado, nuevoValor){
        return valorAcomulado[1] - nuevoValor[1]; //ESTA ES OTRA FORMA DE HACER EL METODO SORT(), LA OTRA ES CON LA FUNCION FLECHA, VISTA EN EL TEMA DE MEDIANA.
    }
);

const moda = listaArray[listaArray.length - 1];
return moda;
}
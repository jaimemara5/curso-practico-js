//Medidas del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado (lado){
    return lado * 4;
}

//console.log("El perímetro del cuadrado mide:  " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Medidas del triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triangulo miden: " 
  //          + ladoTriangulo1
    //        + "cm, "
      //      + ladoTriangulo2
        //    + "cm, "
          //  + baseTriangulo
           // + "cm, "
        //);
        //const alturaTriangulo = 5.5;
        //console.log("La altura del triangulo es: " + alturaTriangulo + "cm.");

        function perimetroTriangulo(lado1, lado2, base){
            if (lado1 === lado2 && lado2 != base)
            {
                return (Number(lado1) + Number(lado2) + Number(base));
            }
            else 
            return "ERROR";
        } 
        
        function areaTriangulo (base, altura ) {
            return (base * altura)/2;
        }
        //console.log("El Área del triangulo mide:  " + areaTriangulo + "cm");
        console.groupEnd();

//Medidas del círculo
        console.group("Circulo");
    function diametroCirculo(radio) {
        return radio * 2;
    }

    const pi = Math.PI;

    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * pi;
    }

    function areaCirculo(radio){
        return (radio * radio) * pi;   
    }
    console.groupEnd();

    //INTERACCIONES CON HTML

    function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }

    function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area= areaCuadrado(value);
        alert(area);
    }

    function calcularPerimetroTriangulo() {
        const input = document.getElementById("Lado1");
        const Lado1 = input.value;
        const input2 = document.getElementById("Lado2");
        const Lado2 = input2.value;
        const input3 = document.getElementById("Base");
        const Base = input3.value;

        const perimetro = perimetroTriangulo(Lado1, Lado2, Base);
        alert(perimetro);
    }

    function calcularAreaTriangulo() {
        const input = document.getElementById("Lado2");
        const Altura = input.value;
        const input2 = document.getElementById("Base");
        const Base = input2.value;

        const area = areaTriangulo(Base, Altura);
        alert(area);
    }

    function calcularPerimetroCirculo() {
        const input = document.getElementById("Radio");
        const value = input.value;

        const perimetro = perimetroCirculo(value);
        alert(perimetro);
    }

    function calcularAreaCirculo() {
        const input = document.getElementById("Radio");
        const value = input.value;

        const area= areaCirculo(value);
        alert(area);
    }
function converterTemp() {
    var tempOrigem = document.getElementById("tempOrigem").value;
    var tempDestino = document.getElementById("tempDestino").value;
    var valorDigitado = document.getElementById("valor").value;
    var resultadoElemento = document.getElementById("resultado");

    //Validar se o valor digitado é um número
    if (isNaN(valorDigitado) || valorDigitado === "") {
        resultadoElemento.innerHTML = "Digite um valor válido.";
        return;
    }

    // Converter o valor de texto para numérico
    var valorNumerico = parseFloat(valorDigitado);

    //Realizar a conversão

var resultado;

switch (tempOrigem) {
    case "celsius":
        if (tempDestino === "fahrenheit") {
            resultado = (valorNumerico * 9/5) + 32;
        } else if (tempDestino === "kelvin") {
            resultado = valorNumerico + 273.15;
        } else {
            resultado = valorNumerico;  // Se as temp de origem e destino forem iguais
        }
        break;
    case "fahrenheit":
        if (tempDestino === "celsius") {
            resultado = (valorNumerico - 32) * 5/9;
        } else if (tempDestino === "kelvin") {
            resultado = (valorNumerico - 32) * 5/9 + 273.15;
        } else {
            resultado = valorNumerico   // Se as temp de origem e destino forem iguais
        }
        break;
    case "kelvin":
        if (tempDestino === "celsius") {
            resultado === valorNumerico - 273.15;
        } else if (tempDestino === "fahrenheit") {
            resultado = (valorNumerico - 273.15) * 9/5 + 32;
        } else {
            resultado = valorNumerico  // Se as temp de origem e destino forem iguais
        }
        break;
    default:
        resultado = "Escolha temperaturas válidas.";
}
    resultadoElemento.innerHTML = "Resultado: " + resultado.toFixed(0) + " " + tempDestino.toUpperCase();
}
function converterMoeda() {
    // Obter os valores dos elementos do HTML pelo ID
    var moedaOrigem = document.getElementById("moedaOrigem").value;
    var moedaDestino = document.getElementById("moedaDestino").value;
    var valorDigitado = document.getElementById("valor").value;
    var resultadoElemento = document.getElementById("resultado");

    // Validar se o valor digitado é um número
    if (isNaN(valorDigitado) || valorDigitado === "") {
        resultadoElemento.innerHTML = "Digite um valor númerico.";
        return;
    }


    // Converter o digitado de texto para número
    var valorNumerico = parseFloat(valorDigitado);

    // Realizar a conversão de moeda
    var resultado;

    // Taxas de conversão
    var taxasDeConversao = {
        libra: {real: 6.04, dolar: 1.24, euro: 1.14, iene: 186.94},
        real: {libra: 0.17, dolar: 0.21, euro: 0.19, iene: 30.96},
        dolar: {libra: 0.80, real: 4.86, euro: 0.92, iene: 150.45},
        euro: {libra: 0.87, real: 5.28, dolar: 1.09, iene: 163.43},
        iene: {libra: 0.0053, real: 0.032, dolar: 0.0066, euro: 0.0061}
    };

    // Verificar se as moedas selecionadas têm taxa de conversão definidas
    if (taxasDeConversao[moedaOrigem] && taxasDeConversao[moedaOrigem][moedaDestino]) {
        resultado = valorNumerico * taxasDeConversao[moedaOrigem][moedaDestino];
        resultadoElemento.innerHTML = "Resultado: " + resultado.toFixed(2) + " " + moedaDestino;
    }else {
        resultadoElemento.innerHTML = "Escolha moedas válidas.";
    }

}
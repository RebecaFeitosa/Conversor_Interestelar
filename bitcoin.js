
async function converter() {
    const moedaSelecionada = document.getElementById("moeda").value;
    const valorDigitado = parseFloat(document.getElementById("valor").value);

    // Verificar se o valor é um número válido
    if (isNaN(valorDigitado)) {
      alert("Por favor, insira um valor numérico válido.");
      return;
    }

    // Obter as taxas de câmbio da CoinGecko
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${moedaSelecionada}`);
      const data = await response.json();

      // Verificar se a moeda selecionada está disponível na resposta
      if (!data || !data.bitcoin || !data.bitcoin[moedaSelecionada.toLowerCase()]) {
        alert("Não foi possível obter as taxas de câmbio.");
        return;
      }

      const taxaDeCambio = data.bitcoin[moedaSelecionada.toLowerCase()];

      // Calcular o valor em Bitcoin
      const valorEmBitcoin = valorDigitado / taxaDeCambio;

      // Exibir o resultado
      document.getElementById("resultado").innerText = `${valorDigitado} ${moedaSelecionada.toUpperCase()} é aproximadamente ${valorEmBitcoin.toFixed(8)} Bitcoin.`;
    } catch (error) {
      console.error("Erro ao obter as taxas de câmbio:", error);
      alert("Erro ao obter as taxas de câmbio. Tente novamente mais tarde.");
    }
  }
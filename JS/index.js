function calculadora(e) {
  let valor = e;

  if (valor === undefined) {
    valor = 0; // Define o valor como 0 se nenhum argumento for passado
  }
  let resultado = document.getElementById("menu");

  if (resultado.value == "0") {
    resultado.value = valor;
  } else {
    resultado.value += valor;
  }

  if (valor == 9995) {
    resultado.value = 0;
  }
  let final = parseFloat(resultado.value);
  console.log(final);

  return final;
}

function somar() {
  let resultadoCalculadora = calculadora(); // Chamando a função calculadora sem passar nenhum argumento
  let valorParaSomar = 10; // Novo valor a ser somado

  let resultadoFinal = resultadoCalculadora + valorParaSomar;
  console.log(resultadoFinal);
}

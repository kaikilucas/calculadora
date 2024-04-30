function calculadora(nome) {
  let valor = nome;
  let resultado = document.getElementById("menu");

  if (resultado.value == "0") {
    resultado.value = valor;
  } else {
    resultado.value += valor;
  }
  console.log(resultado.value);
  return parseFloat(resultado.value);
}

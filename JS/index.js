let primeiroValor = null;
let segundoValor = null;
let imprimir = null;
let resultado = document.getElementById("menu");

function calculadora(e) {
  let valor = e;
  if (
    resultado.value === "0" ||
    primeiroValor === parseFloat(resultado.value)
  ) {
    resultado.value = valor;
  } else {
    resultado.value += valor;
  }

  segundoValor = resultado.value;
  console.log("acompanhar o primeiro resultado " + resultado.value);
}

function limpar() {
  resultado.value = "0";

  primeiroValor = null;
  segundoValor = null;
}

function operador(e) {
  if (e === "+") {
    if(primeiroValor !== null){
      primeiroValor += parseFloat(resultado.value);}else{
    primeiroValor = parseFloat(resultado.value);}

    console.log(primeiroValor);
  }

  if (e === "=") {
    imprimir = primeiroValor + parseFloat(segundoValor);
    resultado.value = imprimir;
    console.log(parseFloat(resultado.value));
  }
}

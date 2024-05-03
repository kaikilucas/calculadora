let display = document.getElementById("menu");
let primeiroValor = null;
let terceiroValor = null;
let segundoValor = null;
let operacao = null;
let segundaOperacao = null;
let quartoValor = null;
let porcentagem = null;

function calculadora(e) {
  let valor = e;

  console.log();
  if (
    (display.value === "0" && valor !== ".") ||
    display.value == terceiroValor ||
    display.value == quartoValor
  ) {
    display.value = valor;
    console.log("teste" + valor);
  } else {
    display.value += valor;
  }

  terceiroValor = null;
  quartoValor = null;
  console.log("display" + display.value);
}

function limpar() {
  display.value = "0";
  primeiroValor = null;
  segundoValor = null;
  terceiroValor = null;
  quartoValor = null;
  porcentagem = null;
  segundaOperacao = null;
}

function operador(e) {
  operacao = e;
  if (segundaOperacao === null) {
    segundaOperacao = operacao;
  } else {
    segundaOperacao != operacao;
  }

  console.log("Segunda operacao " + segundaOperacao);
  if (operacao == "+" && primeiroValor == null) {
    primeiroValor = parseFloat(display.value);
  } else if (operacao == "+" && primeiroValor !== null) {
    primeiroValor += parseFloat(display.value);
  } else if (operacao == "-" && primeiroValor == null) {
    primeiroValor = parseFloat(display.value);
  } else if (operacao == "-" && primeiroValor !== null) {
    primeiroValor -= parseFloat(display.value);
  } else if (operacao == "x" && primeiroValor == null) {
    primeiroValor = parseFloat(display.value);
  } else if (operacao == "x" && primeiroValor !== null) {
    primeiroValor *= parseFloat(display.value);
  } else if (operacao == "/" && primeiroValor == null) {
    primeiroValor = parseFloat(display.value);
  } else if (operacao == "/" && primeiroValor !== null) {
    primeiroValor /= parseFloat(display.value);
  } else if (operacao == "%" && porcentagem == null) {
    porcentagem = parseFloat(display.value);
    porcentagem = parseFloat(primeiroValor / 100) * porcentagem;
    display.value = porcentagem;
  } else if (operacao == "%" && porcentagem !== null) {
  } else if (operacao == "+-" && primeiroValor == null) {
    primeiroValor = parseFloat(display.value);
  } else if (operacao == "+-" && primeiroValor !== null) {
    primeiroValor += parseFloat(display.value);
  }
  if ((display.value = porcentagem)) {
  } else {
    terceiroValor = primeiroValor;
    display.value = terceiroValor;
  }
  console.log("operacao " + operacao);
}

function calcularResultado() {
  segundoValor = parseFloat(display.value);
  if (operacao == "+") {
    display.value = primeiroValor + segundoValor;
  } else if (operacao == "-") {
    display.value = primeiroValor - segundoValor;
  } else if (operacao == "x") {
    display.value = primeiroValor * segundoValor;
  } else if (operacao == "/") {
    display.value = primeiroValor / segundoValor;
  } else if ((operacao == "%") & (segundaOperacao == "-")) {
    display.value = primeiroValor - porcentagem;
  } else if ((operacao == "%") & (segundaOperacao == "+")) {
    display.value = primeiroValor + porcentagem;
  } else if ((operacao == "%") & (segundaOperacao == "x")) {
    display.value = primeiroValor * porcentagem;
  } else if ((operacao == "%") & (segundaOperacao == "/")) {
    display.value = primeiroValor / porcentagem;
  }

  quartoValor = display.value;
  display.value = quartoValor;
  primeiroValor = null;
  segundaOperacao = null;
}

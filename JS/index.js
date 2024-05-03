let display = document.getElementById("menu");
let primeiroValor = null;
let terceiroValor = null;
let segundoValor = null;
let operacao = null;

function calculadora(e) {
  let valor = e;

  console.log(valor === 0);
  if (display.value === "0" || display.value == terceiroValor) {
    display.value = valor;
    console.log("teste" + valor);
  } else {
    display.value += valor;
  }
  terceiroValor = null;
  console.log("display" + display.value);
}

function limpar() {
  display.value = "0";
  primeiroValor = null;
  segundoValor = null;
}

function operador(e) {
  operacao = e;

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
  } else if (operacao == "%" && primeiroValor == null) {
    primeiroValor = parseFloat(display.value);
  } else if (operacao == "%" && primeiroValor !== null) {
    primeiroValor /= parseFloat(display.value);
  } else if (operacao == "+-" && primeiroValor == null) {
    primeiroValor = parseFloat(display.value);
  } else if (operacao == "+-" && primeiroValor !== null) {
    primeiroValor += parseFloat(display.value);
  }
  terceiroValor = primeiroValor;
  display.value = terceiroValor;
  console.log("primeiro valor " + primeiroValor);
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
  } else if (operacao == "%") {
    display.value = "00000";
  }
}

let display = document.getElementById("menu");
let primeiroValor = null;
let segundoValor = null;
let operacao = null;

function limpar() {
  display.value = "0";
  primeiroValor = null;
  segundoValor = null;
}

<<<<<<< HEAD
function calculadora(e) {
  let valor = e;
  console.log("valor " + valor);
  if (valor !== ".") {
    valor = parseFloat(valor);
=======
function operador(e) {
  if (e === "+") {
    if(primeiroValor !== null){
      primeiroValor += parseFloat(resultado.value);}else{
    primeiroValor = parseFloat(resultado.value);}
resultado.value = 0
    console.log(primeiroValor);
>>>>>>> 28d36577299b7104aff191b886cb68e6a6792045
  }
  if (valor === "0" || display.value == 0) {
    display.value = valor;
  } else {
    display.value += valor;
  }
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
  display.value = 0;
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

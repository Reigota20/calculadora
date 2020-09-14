
function botão(num) {
    var salvo = document.calculadora.visor.value;
    document.calculadora.visor.value = salvo + num;
}
function reset() {
    document.getElementById('visor').value = '';
}
function calcular(resultado) {
    var resultado = 0;
   resultado = document.getElementById('visor').value;
   document.getElementById('visor').value = resultado;
   document.getElementById('visor').value = eval(resultado);
}
/*2) Criar uma mini-calculadora SIMPLES, com HTML e JS.
A calculadora deve ter:

-> Título, duas labels, dois inputs e quatro botões.
-> Utilizar os 2 valores dos inputs para realizar a operação do botão clicado.
-> Mostra o resultado em um alert.*/

let elementoInputUm = document.getElementById("inptNumeroUm")
let elementoInputDois = document.getElementById("inptNumeroDois")
let soma, subtrair, multiplicar, dividir
function Soma(){

    soma = Number(elementoInputUm.value) + Number(elementoInputDois.value)
    alert(soma)
}
function Subtrair() {
    subtrair = Number(elementoInputUm.value) - Number(elementoInputDois.value)
    alert(subtrair)
}
function Multiplicar() {
    multiplicar = Number(elementoInputUm.value) * Number(elementoInputDois.value)
    alert(multiplicar)
}
function Dividir() {
    dividir = Number(elementoInputUm.value) / Number(elementoInputDois.value)
    alert(dividir.toFixed(2))
}
function LimparDados() {
    elementoInputUm.value = ''
    elementoInputDois.value = ''
}
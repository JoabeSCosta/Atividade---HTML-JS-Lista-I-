
let elementoInputUm = document.getElementById("inptNumeroUm")
let elementoInputDois = document.getElementById("inptNumeroDois")
let elementoInputTres = document.getElementById("inptNumeroTres")
let soma, media
function Alert(){

    soma = Number(elementoInputUm.value) + Number(elementoInputDois.value) + Number(elementoInputTres.value)
    media = soma / 3
    alert(media.toFixed(2))
}
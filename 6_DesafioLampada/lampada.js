var imagem = window.document.getElementById('Lampada')
var quebrado = false

function Ligar() {
    if (quebrado == true) {
        
    } else {
        imagem.src = "./lampadaLigada.svg"
    }
}

function Desligar() {
    if (quebrado == true) {
        
    } else {
        imagem.src = "./lampaApagada.svg"
    }
}

function Quebrar() {
    imagem.src = "./lampadaQuebrada.svg"
    quebrado = true
}
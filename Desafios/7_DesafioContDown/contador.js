var dia = window.document.getElementById('dia')
var hora = window.document.getElementById('hora')
var minuto = window.document.getElementById('minuto')
var segundo = window.document.getElementById('segundo')

const lancamento = "15 jan 2026"

function countdown() {
    const datalancamento = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (datalancamento - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 /60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
setInterval(countdown, 1000)
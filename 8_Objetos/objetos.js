var jogador = {
    nome: 'Renato Augusto',
    idade: 34,
    numGol: 81,
    Gol(g=0) {
        console.log('Renato fez gol!')
        jogador.numGol += g
    }
}

console.log(jogador.nome)
jogador.Gol()
console.log(jogador.numGol)

jogador.posicao = 'Meio Campo'

console.log(jogador.posicao)
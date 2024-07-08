class jogador {
    constructor (nome, posicao, numGols) {
        this.nome = nome
        this.posicao = posicao
        this.numGols = numGols
    }
    golsMarcados(){
        console.log(`O ${this.nome} ja marcou ${this.numGols} gols em sua carreira`)
    }
}

const Neymar = new jogador('Neymar', 'Atacante', 400)
Neymar.golsMarcados()
const Pele = new jogador('Pelé', 'Atacante', 1000)
Pele.golsMarcados()
const jogador = function(nome, posicao, numGol){
    Nome = nome,
    Posicao = posicao,
    Gols = numGol,

    this.getNome = function(){
        return Nome
    }
    this.getPos = function(){
        return Posicao
    }
    this.getGols = function(){
        return Gols
    }
}

const Neymar = new jogador("Neymar", "Atacante", "400")
console.log(Neymar.getNome())

const Renato = new jogador("Renato", "Meio Campo", "50")
console.log(Renato.getNome())
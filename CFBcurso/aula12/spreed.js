const soma=(v1,v2,v3) => {
    return v1+v2+v3
}

let valores = [1,5,4]

console.log(soma(...valores)) // Neste caso, cada valor é adicionado ao parametro de soma() por causa do spreed...

/*
let jogador1 = {nome: "Bruno", energia: 100, vidas: 3, magia: 150}
let jogador2 = {nome:"Bruce", energia: 100, vidas: 5, velocidade: 80}
let jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)

*/

/*
const pessoa1 = "Bruno"
const pessoa2 = "ana"
const pessoa3 = [...pessoa1, ...pessoa2]

for (p in pessoa3) {
    console.log(`${pessoa3[p]}`) Mostrará a junção dos dois nomes num Array
}
*/
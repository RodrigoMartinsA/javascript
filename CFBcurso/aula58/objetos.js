/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
-> Sets 
-> String
->      -- Object --

*/

class Carro {
    constructor(nome, tipo) { // Método que é chamado quando se instancia um objeto na classe
        this.nome=nome
        if (tipo == 1 ){
            this.tipo = "esportivo"
            this.vmax = 300
        } else if (tipo == 2){
            this.tipo = "ultilitário"
            this.vmax = 100
        } else if(tipo == 3) {
            this.tipo = "Passeio"
            this.vmax = 160
        } else {
            this.tipo = "Militar"
            this.vmax = 180
        }
    }

    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getVmax() {
        return this.vmax
    }

    getInfo() {
        return [
            this.nome,
            this.tipo,
            this.vmax
        ]
    }

    setNome(nome) {
        this.nome = nome
    }

    setTipo(tipo) {
        this.tipo = tipo
    }

    setVmax(vmax) {
        this.vmax = vmax
    }
    
    info() {    // Informa todas as informações do carros dentro da classe 
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.vmax}`)
        console.log("==================")
    }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo", 2)
let c3 = new Carro("Bombadão", 4)
let c4 = new Carro("Carrego Tudo", 3)

// console.log(c1.nome)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

// c1.info()
// c2.info()
// c3.info()
// c4.info()

c1.nome = "Super Veloz"

console.log(c1.getInfo())   // Retorna o array das informações informadas na função getInfo
console.log(c1.getInfo()[0])    // Retorna a primeira item presente no array criado em getInfo
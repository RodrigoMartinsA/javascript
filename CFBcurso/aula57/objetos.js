/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
-> Sets 
-> String
->      -- Object --

*/

class Pessoa {
    constructor(nome) { // Método que é chamado quando se instancia um objeto na classe
        this.nome=nome
        this.idade=23
    }
}

let p1 = new Pessoa("Rodrigo")
let p2 = new Pessoa("Mario")
let p3 = new Pessoa("Cláudio")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
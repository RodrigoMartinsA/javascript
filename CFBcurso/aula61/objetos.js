/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
-> Sets 
-> String
->      -- Object --

*/

const Pessoa={
    nome: String,
    idade: Number,

    getNome: function(){
        return this.nome
    },
    
    getIdade: function(){
        return this.idade
    },

    setIdade: function() {
        this.idade=idade
    },
    setNome: function(){
        this.nome = nome
    }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = "Luiz"        // Podemos trocar o nome do objeto Pessoa assim
p2["nome"] = "Rafael"   // tabém podemos trocar o nome desta forma 
Pessoa.setNome("Maria") // tabém podemos trocar o nome desta forma 

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)
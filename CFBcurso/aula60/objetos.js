/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
-> Sets 
-> String
->      -- Object --

*/

function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade,

    this.getNome = function() {
        return this.nome
    },
    this.getIdade = function() {
        return this.idade
    },

    this.getInfo = function() {
        return [
            this.nome,
            this.idade
        ]
    },

    this.setNome = function(nome) {
        this.nome = nome
    },

    this.setTip = function(idade) {
        this.idade = idade
    },

    this.info = function() {    // Informa todas as informações do carros dentro da classe 
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("----------------------")
    }
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = () => {
    res.innerHTML = ""
    pessoas.map((p) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p) // Adiciona as informações nome e idade obtidas na classe Pessoa

    nome.value = "" // Limpa o input assim que apertar o botão adicionar
    idade.value = ""
    nome.focus()
    addPessoa()

})
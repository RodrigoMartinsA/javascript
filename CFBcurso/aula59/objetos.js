/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
-> Sets 
-> String
->      -- Object --

*/

class Pessoa{
    constructor(nome, idade) { // Método que é chamado quando se instancia um objeto na classe
        this.nome = nome
        this.idade = idade
    }

    getNome() {
        return this.nome
    }

    getIdade() {
        return this.idade
    }

    getInfo() {
        return [
            this.nome,
            this.idade
        ]
    }

    setNome(nome) {
        this.nome = nome
    }

    setTipo(idade) {
        this.idade = idade
    }

    info() {    // Informa todas as informações do carros dentro da classe 
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
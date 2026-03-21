/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
-> Sets 
-> String
->      -- Object --

*/
const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")
const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

pessoas = []

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade

    this.getNome = function() {
        return this.nome
    }

    this.getIdade = function() {
        return this.idade
    }
}

btn_add.addEventListener("click", (ev) => {
    const nomVal = nome.value.trim()
    const idaVal = idade.value.trim()

    if (!nomVal || !idaVal) return

    const p = new Pessoa(nomVal, idaVal)
    pessoas.push(p)
    
    nome.value = ""
    idade.value = ""
    nome.focus()

    add_pessoa()
})

const add_pessoa = () => {
    res.innerHTML = ""

    pessoas.map((p) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}
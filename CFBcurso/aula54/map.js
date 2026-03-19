/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
->      -- MAP --
->  Sets
->  String
->  Object

*/

const caixa = document.querySelector("#caixa");

let mapa = new Map();   // Cria um novo mapa
mapa.set('curso', 'JavaScript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('canal', 100)

mapa.delete(1)   // Remove o elemento do mapa onde a chave é 1, ou seja, remove o elemento com o valor 100

console.log(mapa)
if (mapa.has('canal')){ 
    const valor = mapa.get('canal')
    res = `A chave 'canal' existe no mapa com o valor ${valor}` 

} else {
    res = "A chave 'canal' não existe no mapa"
}

let tamanho = mapa.size
res += ` <br/> O tamanho da coleção é ${tamanho} `
caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})
// caixa.innerHTML = mapa.get('curso')
// mapa.set('nome', 'Rodrigo')   // Adiciona um novo elemento ao mapa, onde a chave é 'nome' e o valor é 'Rodrigo'

// console.log(mapa.get('nome'))   // Acessa o valor do elemento do mapa onde a chave é 'nome', ou seja, acessa o valor 'Rodrigo'
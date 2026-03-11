/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

->  Array    
->  String
->  Map
->  Sets

*/
const caixa = document.getElementById('caixa')

let cores = ["Azul", "Verde", "Vermelho"]
let cursos = ['JavaScript', 'Python', 'Java', cores]

// cursos[0] = 'PHP'   // Altera o valor do primeiro elemento do array para 'PHP'

cursos.push('HTML5')   // Adiciona um novo elemento ao FINAL do array
cursos.unshift('CSS3')  // Adiciona um novo elemento ao INÍCIO do array
cursos.shift()          // Remove o PRIMEIRO elemento do array
cursos.pop()             // Remove o ÚLTIMO elemento do array

console.log(cursos[3][1])   // Acessa o segundo elemento do array 'cores' que está dentro do array 'cursos', ou seja, acessa o elemento 'Verde'

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
// console.log(cursos) 
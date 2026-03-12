/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
-> Sets 
->      -- String --

*/

const caixa = document.querySelector("#caixa");

const carror = ['Pool', 'Golf', 'T-Cross', 'HRV']

let ul = '<ul>'
carror.forEach((el) => {
    ul += `<li>${el}</li>`
})
ul += `</ul>`

const curso = 'JavaScript';
const canal = 'CFB Cursos';
const frases = `Este é o curso \nde ${curso} \ndo canal ${canal}`;

caixa.innerHTML = ul
console.log(frases)
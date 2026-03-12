/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

->  Array    
->  Map
->  Sets
->  String

*/

const valores = [10, 20, 30, 40, 50]; // Arrays são iteráveis, ou seja, eles possuem o método Symbol.iterator que retorna um iterador para o array
const it_valores = valores[Symbol.iterator]() // o método Symbol.iterator é uma função que retorna um iterador para o array, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento do array, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

const texto = "Youtube"
const it_texto = texto[Symbol.iterator]()

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next()) 
console.log(it_texto.next())

/* 
Quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true, ou seja, ele retorna 
{ value: undefined, done: true }
  */
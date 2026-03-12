/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

-> Array     
-> Map
->      -- Sets --
->  String

*/

const caixa = document.querySelector("#caixa");

let musicas = new Set(['musica1', 'musica boa', 'musica10']);   // Cria um novo conjunto

musicas.add('musica muito legal')
musicas.add("musica1")
musicas.add('musica10')
/*  Metodo Set não permite elementos duplicados */

console.log(musicas)

musicas.delete('musica1')   // Remove o elemento do conjunto onde o valor é 'musica1'

musicas.forEach((el) => {
    caixa.innerHTML += `${el} <br/>`
})

for (let m of musicas){   // O for of percorre os elementos do conjunto
    console.log(m)
}
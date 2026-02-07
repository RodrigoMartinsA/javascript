const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(document.getRootNode())     // Retorna o Nó raiz de todo o site
console.log(btn_c[0].ownerDocument)


console.log(caixa1.firstElementChild)   // Mosta o primeiro elemento filho de DIV principal
console.log(caixa1.lastElementChild)    // Também podemos usar  "console.log(caixa1.children[caixa1.children.length - 1])"
console.log(caixa1.children)            // Mosta todos os filhos da DIV principal
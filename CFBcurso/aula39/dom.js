const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(caixa1.hasChildNodes())         // Verifica se o elemento possui Child e retorna "True" ou "False"
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)            // Retorna qual oo child de btn_c na posição [0]
console.log(btn_c[0].children)              // Retorna se quantos child btn_c tem, sem contar o text encontrado pelo ChildNodes

console.log(caixa1.children.length > 0 ? "caixa1 Possui filhos" : "caixa1 Não possui filhos") // Condição ternária, sem precisar usar if else
console.log("------------------------------------------------------")
console.log(btn_c[0].children.length > 0 ? "btn_c Possui Filhos" : "btn_c Não possui filhos")

// console.log(caixa1.firstElementChild)   // Mosta o primeiro elemento filho de DIV principal
// console.log(caixa1.lastElementChild)    // Também podemos usar  "console.log(caixa1.children[caixa1.children.length - 1])"
// console.log(caixa1.children)            // Mosta todos os filhos da DIV principal
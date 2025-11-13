let num = [5, 8, 2, 9, 3]
num.sort() // Coloca o Array em ordem crescente
console.log(`Com o sort() temos a ordem ${num}`)

console.log('==================================================================================')

let num2 = [1,3,4,2]
num2.push(12) // Adiciona ao fim do Array
console.log(`Com o .push(12), adicionamos um elemento ao Array ficando assim ${num2}`)

console.log('=================================================================================')

let num3 = [10,13,12,11]
// console.log(num.length) Conta quantos elementos tem dentro do Array
console.log(`com o .length, fazemos a conta de quantos elementos temos dentro do Array ${num3.length}`)

console.log('=================================================================================')

let pos = num.indexOf(8)
console.log(num)
console.log(`o valor está na posição ${pos}`)
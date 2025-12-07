const converterInt = (e) => parseInt(e) // Função de callback que converte para inteiro
const dobrar = (e) => e*2 // Função de callback que dobra o valor

let num2 = ['1', '2', '3', '4', '5'].map(converterInt) // Usando o map com a função de callback
console.log(num2) // [1, 2, 3, 4, 5]

let num = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num) // [2, 4, 6, 8, 10]







// const el = document.getElementsByTagName("div") // HTMLCollection
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML) // Transformando em Array e usando map
// console.log(val)





// let el = document.getElementsByName("div") // HTMLCollection
// el = [...el] // Transformando em Array

// el.map((e, i) => {
//     console.log(e.innerText) // Mostra o texto de cada div 
// })






// const cursos = ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS']

// let c = cursos.map((el, i) => { // Função de callback Arrow Function
//     return `<div> ${el} </div>`
// })

// console.log(c)
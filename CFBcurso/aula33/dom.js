const divTodas = document.getElementsByTagName("div"); 
const cursoTodos = [...document.getElementsByClassName("curso")];
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("c1")


const query_divTodas = [...document.querySelectorAll("div > p")] // Pega todos os elementos <div> do documento // querySelector retorna apenas o primeiro elemento que encontrar // usando o [class] pegamos todas as divs que possuem alguma classe atribuída
const query_cursosTodos = [...document.querySelectorAll(".curso")] // Pega todos os elementos com a classe curso usando o "."
const query_cursosC1 = [...document.querySelectorAll(".c1,p")] // Pega todos os elementos com a classe c1 e todas as tags <p>
const query_cursosC2 =[...document.querySelectorAll(".c2")]


console.log(query_divTodas)

// console.log(divTodas)
// console.log(cursoTodos)
// console.log(cursoC1)
// console.log(cursoC2)
// console.log(cursoEspecial)

// cursoC2.map((el) => {
//     el.classList.add("destaque") // Adiciona a classe destaque a todos os elementos com a classe curso
// })
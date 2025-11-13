const objs = document.getElementsByTagName("div")

let num = [10,20,30,40,50]

for (o of objs){ //Pega diretamente do Array
    console.log(o.innerHTML="curso") // Podemos fazer alterações dentro do loop apenas com o "of" o "in" faz mas fica undefined por ele não conseguir reconhecer o innerHTML
}

console.log('======================================')

for (o in objs ) {
    console.log(o) //Faz a ultilização da quantidade de elementos dentro do Array
}

console.log('======================================')

for(let i = 0; i < num.length; i++) { //Cria um Loop de acordo com o length da quantidade de elementos dentro do Array num
    console.log(num[i])
}
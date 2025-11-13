const valor_padrao = 0 // Podemos adicionar uma variável para colocar no lugar do número zero.

function add(v) {
    valor+=v
}

let valor = 0 //Criamos a variável valor com número = 0
console.log(valor)

add(10) // A cada chamado da função add, adicionamos o valor determinado à soma de valor com o parâmetro v. (valor = valor + v)
console.log(valor)

add(5)
console.log(valor)



function soma(n1 = valor_padrao, n2 = 0) { // Adicionando os parêmetros ao lado da soma, quando ela for chamada sozinha, faz o que a function determinar, neste caso console.log(n1 + n2)
    console.log(n1 + n2) // Caso não tivesse deterinado o console,log(), precisaríamos adicionar para expor fora da function
}

soma(10) // Caso só seja apresentado um dos parâmetros, podemos determinar o padrão para a function não rodar com NaN e dar errado com o soma(n1 = 0, n2 = 0) por padrão, fica com o valor zero
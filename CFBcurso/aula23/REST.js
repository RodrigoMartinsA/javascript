// PARÂMETROS REST

 function soma(...valores) { // Com o spread, criaremos uma Array para o parâmetros [valores]
    // let tam = valores.length [Tamanho da Array dos parâmetros de valores]
    let res = 0
    for (i of valores){ // Poderia ser for(i in valores){   res = valores[i]}
        // res+=valores[i]  [i nesse caso determina a posição dos elementos dentro do ARRAY dos parâmetros da function]
        res+=i // i nesse caso pega os valores dentro do Array valores e já faz a soma para o res solicitado 
    }
    return res
 }

 console.log(soma(10,5,2,8,15)) // Quando adicionamos valores para os parâmetros, ele usa a function e faz a soma dos elementos dentro do Array
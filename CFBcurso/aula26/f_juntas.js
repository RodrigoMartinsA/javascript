let soma=(...valores) => {
    let somar = (val) => { // define a função somar que recebe um array 'val'
        let res = 0 // inicializa o acumulador 'res' com zero
        for (v of val) { // percorre cada elemento 'v' presente em 'val'
            res += v // adiciona o valor atual 'v' ao acumulador 'res'
        } 
        return res // retorna o total acumulado após a iteração
    } 
    return somar(valores)
}

console.log(soma(10, 5, 15)) // RES 30
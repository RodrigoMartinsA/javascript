let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){ // Faz saber se o elemento número está entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // Faz saber se o elemento número já foi adicionado à lista
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        false
    }
}

function adicionar() { // vai adicionar os valores dos elementos ao select com option
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert(`Valor inválido ao já encontrado na lista!`)
    }
    num.value = ''
    num.focus() //apaga o número automaticamente quando clicamos em adicionar
} 

function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione valores antes de finalizar`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) { // SE o maior for o primeiro ele vai separar ao valor zero, e divide dos outros números 
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valore informado foi ${maior}</p>`
        res.innerHTML += `<p>O menos valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p> `
    }
}
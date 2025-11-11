function contar() {
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtn3 = document.getElementById('txtn3')
    var res = document.getElementById('res')

    
    if (txtn1.value.length == 0 || txtn2.value.length == 0 || txtn3.value.length == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        step = 1
    } else {
        res.innerHTML = 'Contando: <br>'
        var start = Number(txtn1.value)
        var end = Number(txtn2.value)
        var step = Number(txtn3.value)
        if (start < end) {
            // Contagem Crescenter
            for (var c = start; c <= end; c += step) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (var c = start; c >= end; c -= step) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
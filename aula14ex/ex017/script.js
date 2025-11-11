function tabuada() {
    let txtn1 = document.getElementById('txtn1')
    let tab = document.getElementById('seltab')
    
    if (txtn1.value.length == 0) {
        window.alert(`Por favor adicione um número!`)
    } else {
        var n1 = Number(txtn1.value)
        tab.innerHTML = ""
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1 * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
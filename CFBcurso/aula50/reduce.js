const p_array = document.querySelector('#array');
const btn_reduzir = document.querySelector("#btnreduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [ 1, 2, 3, 4, 5];
let ant = []
let atu = []
let dobro = []
p_array.innerHTML = '[' + elementos_array + ']' 

btn_reduzir.addEventListener("click", (evt) => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, i) => { // o método reduce tem a função de reduzir o array a um único valor, ou seja, ele pega o primeiro elemento do array e o segundo elemento do array e aplica a função de callback, depois ele pega o resultado da função de callback e o terceiro elemento do array e aplica a função de callback novamente, e assim por diante, até que ele tenha percorrido todo o array, e no final ele retorna o resultado final da redução do array (FAZ A SOMA DE TODOS OS ITENS DENTRO DO ARRAY E RETORNA O VALOR TOTAL COMO RESPOSTA)
        ant.push(anterior);
        atu.push(atual);
        dobro.push(atual*2)
        return atual + anterior
    })
    resultado.innerHTML+="<br/>" + "Antes:" + ant + "<br/>" + "Atual: " + atu + "<br/>" + "Dobro: " + dobro
    
})
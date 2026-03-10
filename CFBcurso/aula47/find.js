const p_array = document.querySelector('#array');
const txt_pesquisar = document.querySelector("#text_pesquisar");
const btn_pesquisar = document.querySelector("#btnpesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

p_array.innerHTML = '[' + elementos_array + ']' // também pode ser feito usando o método join, como mostrado abaixo:
// p_array.innerHTML = '[' + elementos_array.join(', ') + ']'

btn_pesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = `Valor não foi encontrado`
    const ret = elementos_array.find((e, i) => { // dentro da função de callback do método find, o primeiro parâmetro é o elemento do array e o segundo é o índice do elemento
        if (e == txt_pesquisar.value) {
            resultado.innerHTML = `O elemento ${e} foi encontrado no índice ${i+1}`

        }
    })
    console.log(ret);
})
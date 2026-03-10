const p_array = document.querySelector('#array');
const btn_verificar = document.querySelector("#btnverificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [ 17, 20, 30, 40, 50, 60, 70, 80, 90, 100];
p_array.innerHTML = '[' + elementos_array + ']' 

btn_verificar.addEventListener("click", (evt) => {
    elementos_array.some((e, i) => { // o método SOME verifica se pelo menos UM elemento do array atende a condição, ou seja, se algum elemento do array é maior que 18, por exemplo, ele retorna true, caso contrário, ele retorna false
        if (e >= 18) {
            resultado.innerHTML = `Pelo menos um elemento do array é maior que 18`
        } else {
            resultado.innerHTML = `Array não conforme em nenhuma das posições`
        }
        console.log(resultado.innerHTML);
    })
})
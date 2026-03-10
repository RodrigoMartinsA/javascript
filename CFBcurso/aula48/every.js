const p_array = document.querySelector('#array');
const btn_verificar = document.querySelector("#btnverificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [ 18, 20, 30, 40, 50, 60, 70, 80, 90, 100];
p_array.innerHTML = '[' + elementos_array + ']' 

btn_verificar.addEventListener("click", (evt) => {
    elementos_array.every((e, i) => { // o método every tem a mesma função do find, mas ele verifica se todos os elementos do array atendem a condição, ou seja, se TODOS os elementos do array são maiores que 18, por exemplo, ele retorna true, caso contrário, ele retorna false
        if (e >= 18) {
            resultado.innerHTML = `Todos os elementos do array são maiores que 18`
        } else {
            resultado.innerHTML = `Array não confirme na posição ${i+1} o elemento ${e} é menor ou igual a 18`
        }
        console.log(resultado.innerHTML);
    })
})
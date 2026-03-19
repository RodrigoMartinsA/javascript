/*      
            Coleções Iteráveis    

Retorna um iterador, para facilitar a iteração dos elementos de uma coleção, ou seja, ele retorna um objeto que tem a função next() que retorna o próximo elemento da coleção, e quando não houver mais elementos para iterar, ele retorna um objeto com a propriedade done: true.

->      -- ARRAY --    
->  Map
->  Sets
->  String
->  Object

*/
const resposta = document.querySelector("#resposta");
const button = document.getElementsByTagNameNS("button", "*")


const op = [
    (val) => {
        let res = val[0]    // Começa com o primeiro número
        for (let i = 1; i < val.length; i++) {
            res+=val[i]   // Soma o próximo número ao resultado
        }
        return res;
    },
    (val) => {
        let res = val[0]
        for (let i = 1 ; i < val.length; i++) {
            res-=val[i] // Subtrai o próximo número ao resultado
        }
        return res;
    },
    (val) => {
        let res = val[0]
        for (let i = 1; i < val.length; i++) {
            res*=val[i] // Multiplica o próximo número ao resultado
        }
        return res;
    },
    (val) => {
        let res = val[0]
        for (let i = 1; i < val.length; i++) {
            res/=val[i] // Divide o próximo número ao resultado
        }
        return res;
    }
]
function Calcular(indexOperacao) {  // indexOperacao é o índice da operação selecionada, ou seja, 0 para soma, 1 para subtração, 2 para multiplicação e 3 para divisão
    const input1 = parseFloat(document.querySelector("#input1").value);
    const input2 = parseFloat(document.querySelector("#input2").value);
    const valores = [input1, input2]

    const res = op[indexOperacao](valores)
    resposta.value = `O resultado é ${res}`
    console.log(res)
}

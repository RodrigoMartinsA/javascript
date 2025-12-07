// FUNÇÃO ANÔNIMA
const f1 = new  Function ("v1", "v2", "v3", "return v1+v2+v3")//Função Construtor Anônima 

console.log(f1(10, 5, 15)) // RES 30 

let f2 = function(...valores) {
    let res = 0

    for (v of valores) {
        res += v
    }
    return res
}

console.log(f2(10, 5, 15, 20, 25)) // RES 75
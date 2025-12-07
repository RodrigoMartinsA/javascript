function* cores() { // Função geradora
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
}

const itc = cores()
console.log(itc.next().value) // Vermelho
console.log(itc.next().value) // Verde
console.log(itc.next().value) // Azul
console.log(itc.next().value) // undefined


function* perguntas() {
    let nome = yield "Qual seu nome?"
    let esporte = yield "Qual seu esporte favorito?"
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itp = perguntas()

console.log(itp.next().value) // Qual seu nome?
console.log(itp.next("Rodrigo").value) // Qual seu esporte favorito?
console.log(itp.next("Basquete").value) // Seu nome é Rodrigo e seu esporte favorito é Basquete

function* contador() {
    let i = 0 
    while (true) {
        yield i++
        if (i > 5) {
            break
        }
    }
}

const itc2 = contador()
for (let c of itc2) {
    console.log(c)
}

const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL", "ReactNative"]

cursos.map((el, chave) => { // Faz a verificação dos elementos dentro do Array cursos, retorna o nome dos elementos com "el" e a numeração de cada elemento com "chave"
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("div", `c${chave}`);
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    caixa1.appendChild(novoElemento)
})

// const novoElemento = document.createElement("div")  // Cria um elemento DIV
// novoElemento.setAttribute("id", "c7")               // Seta o atributo ID com a tag "c7"
// novoElemento.setAttribute("class", "curso c1")      // Seta o atributo Class com a tag "curso c1"
// novoElemento.innerHTML="ReactNative"                // Adiciona o texto ao novoElemento

// caixa1.appendChild(novoElemento)        // Adiciona o novoElemento à DIV principal
const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL", "ReactNative"]

cursos.map((el, chave) => { // Faz a verificação dos elementos dentro do Array cursos, retorna o nome dos elementos com "el" e a numeração de cada elemento com "chave"
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("div", `c${chave}`);
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const lixeira = document.createElement("img")
    lixeira.setAttribute("src", "https://images.vexels.com/media/users/3/223479/isolated/preview/8ecc75c9d0cf6d942cce96e196d4953f-icone-da-lixeira-plana.png")
    lixeira.setAttribute("class", "lixeira")
    
    lixeira.addEventListener("click", (evt) => {
        console.log(evt.target.parentNode)
        caixa1.removeChild(evt.target.parentNode)    // Clicando ele vai remover o filho informado pelo parent de  "lixeira" no caso, "novoElemento" também funcionaria trocando o target por novoElemento
    })
    
    novoElemento.appendChild(lixeira)
    caixa1.appendChild(novoElemento)
})

// const novoElemento = document.createElement("div")  // Cria um elemento DIV
// novoElemento.setAttribute("id", "c7")               // Seta o atributo ID com a tag "c7"
// novoElemento.setAttribute("class", "curso c1")      // Seta o atributo Class com a tag "curso c1"
// novoElemento.innerHTML="ReactNative"                // Adiciona o texto ao novoElemento

// caixa1.appendChild(novoElemento)        // Adiciona o novoElemento à DIV principal
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")

const arrayElementos = [c1, c2, c3, c4, c5, c6] //cria um array com os elementos do DOM

arrayElementos.map((e) => {
    e.style.backgroundColor = "lightblue" //cor background: lightblue
    e.style.margin = "10px" //margem: 10px
    e.style.padding = "10px" //padding: 10px
    e.style.border = "2px solid navy" //borda: 2px solid navy
    e.style.textAlign = "center" //alinhamento do texto: center
    e.style.fontSize = "20px" //tamanho da fonte: 20px
    e.style.fontWeight = "bold" //peso da fonte: bold
    e.style.fontFamily = "Arial, sans-serif" //família da fonte: Arial, sans-serif
    console.log(e.innerHTML) //imprime o conteúdo HTML interno de cada elemento
})
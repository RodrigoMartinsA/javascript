const caixaCursos = document.querySelector('#caixaCursos');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector("#c1_2");
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois")
const nomeCurso = document.querySelector("#nomeCurso")

const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL", "ReactNative"]

let indice = 0

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((element) => {
        element.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (event) => {
        tirarSelecao() // Remove a classe "selecionado" de todos os cursos
        event.target.classList.toggle("selecionado") // Adiciona ou remove a classe "selecionado" do elemento clicado
    })

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    // comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento;
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++ 
})

const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")] // Seleciona todos os elementos com a classe "selecionado"
    return cursosSelecionados[0] 
}

btnCursoSelecionado.addEventListener("click", (event) => {
    try {
        alert("Curso selecionado: " + cursoSelecionado().textContent)
    } catch (ex) {
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener("click", (event) => {
    const cs = cursoSelecionado(); // Obtém apenas o curso selecionado
    if (cs != undefined) {
        cs.remove()
    } else {
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evnt) => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
            nomeCurso.value = ""
        } else {
            alert("Informe o nome do curso")
        } 
    } catch (ex) {
        alert("Selecione um Curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (env) => {
    try {
         if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling) 
            nomeCurso.value = "" 
         } else {
            alert("Informe o nome do curso")
         }
    } catch (ex) {
        alert("Selecione um Curso")
    }
})
const caixaCursos = document.querySelector('#caixaCursos');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector("#c1_2");
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")

const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL", "ReactNative"]

// Percorre cada curso do array usando map
cursos.map((el, chave) => {
    // Cria um novo elemento div para representar um curso
    const novoElemento = document.createElement("div")
    // Define um id único para cada curso baseado no índice (c0, c1, c2, etc)
    novoElemento.setAttribute("id", `c${chave}`)
    // Define as classes CSS para estilizar o elemento
    novoElemento.setAttribute("class", "curso c1")
    // Insere o nome do curso dentro da div
    novoElemento.innerHTML = el

    // Cria uma div para conter os comandos (controles) do curso
    const comandos = document.createElement("div")
    // Define a classe CSS para a div de comandos
    comandos.setAttribute("class", "comandos")

    // Cria um input do tipo radio (botão de seleção)
    const rb = document.createElement("input")
    // Define o tipo do input como radio
    rb.setAttribute("type", "radio")
    // Define o nome do grupo de radio (permite selecionar apenas um)
    rb.setAttribute("name", "rb_curso")

    // Adiciona o radio button dentro da div de comandos
    comandos.appendChild(rb)

    // Adiciona a div de comandos dentro do elemento do curso
    novoElemento.appendChild(comandos)

    // Adiciona o elemento do curso dentro da caixa de cursos (no HTML)
    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener("click", (event) => {
    const todosRadios = [...document.querySelectorAll('input[type="radio"]')]; // Seleciona todos os inputs do tipo radio e os transforma em um array
    let radioSelecionado = todosRadios.filter((element, indice, array) => {
        return element.checked; // Retorna somente o radio button que está selecionado (checked)
    })
    radioSelecionado = radioSelecionado[0].parentNode.parentNode.textContent;

    const replace = document.querySelector("#nomeCurso")
    replace.value = radioSelecionado; // Substitui o texto do elemento com id "nomeCurso" pelo nome do curso selecionado
    console.log(todosRadios)
    console.log(radioSelecionado)
    alert(radioSelecionado)
})
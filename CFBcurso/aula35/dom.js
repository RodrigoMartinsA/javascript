const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn_transferir = document.querySelector('#btn_transferir')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el) => {       // el é cada um dos elementos do array todosCursos
    el.addEventListener('click', (evt) => { // evt é o evento de clique
        const curso = evt.target;   // target é o elemento que recebeu o clique
        curso.classList.toggle('selecionar') 
        // ADICIONAR a classe selecionar ao elemento clicado
        // classList cria uma lista com todas as classes do elemento
        // TOOGLE adicionar ou remover a classe verificando se ele já foi adicionado ou não
    })
});

btn_transferir.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionar')];
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionar)')]; // seleciona todos os elementos que possuem a classe curso, mas que não possuem a classe selecionar usando o :not() antes da classe selecionar
    
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el);
                
    });

    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el);
    });
});
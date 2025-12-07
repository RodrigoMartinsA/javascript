function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function() {
        setTimeout(function() {
            // this.nome="x"        PRECISAMOS ADICIONAR UMA VARIÁVEL PARA PEGAR O THIS
            // this.nota=0          CASO CONTRARÁRIO, O THIS NÃO FUNCIONA EM FUNÇÃO ANÔNIMA
            console.log(this.nome)
            console.log(this.nota)
        }, 2000) // 2000 milissegundos = 2 segundos para o setTimeout
    }

    this.dados_arrow = function() {
        setTimeout(() => {  // ARROW FUNCTION USA O THIS DO CONTEXTO ONDE ELA FOI CRIADA SEM PRECISAR DE VARIÁVEL AUXILIAR
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

let al1 = new aluno("Rodrigo", 9.5)
al1.dados_anonimo() // undefined, undefined (this não funciona em função anônima)
al1.dados_arrow() // Rodrigo, 9.5 (this funciona em Arrow Function)
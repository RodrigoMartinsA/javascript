const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelectorAll('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt) => {
    console.log('clicou')
    console.log(evt.target)
})

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation() // impede o evento de propagar para os elementos pais como é o caso do caixa1 que é o div pai
    })
})
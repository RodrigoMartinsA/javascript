const idades = [15, 21, 30, 17, 18, 44, 12, 50];
const maior = idades.filter((val) => { // Faz uma filtragem no Array idades, retornando somente os valores maiores ou iguais a 18
    if (val>= 18) {
        return val;
    }
});

const menor = idades.filter((val) => { // Faz uma filtragem no Array idades, retornando somente os valores menores que 18
    if (val < 18) {
        return val;
    }
})

console.log("as idades são:", idades);
console.log("as idades maiores ou iguais a 18 são:", maior);
console.log("as idades menores que 18 são:", menor);
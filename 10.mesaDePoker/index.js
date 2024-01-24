let valores = [0, 5, 6, 10, 11];
let max = 10;
let min = 2

function solucao(min, max, valores) {
    let valoresPermitidos = valores.filter((valor) => {
        return valor >= min && valor <= max;
    });
    return valoresPermitidos;
}

console.log(solucao(min, max, valores))
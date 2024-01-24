let lista = [1, 2, 3, 4];

function solucao(lista) {
    valorAcumulado = lista.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    });
    return valorAcumulado;
}

console.log(solucao(lista));







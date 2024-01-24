let lista = [2, 3, 4];

function solucao(lista) {
    const soma = lista.reduce((acumulador, valorAtual, index, array) => {
        return acumulador + valorAtual;

    });
    const media = soma / lista.length;
    return media
}

console.log(solucao(lista));
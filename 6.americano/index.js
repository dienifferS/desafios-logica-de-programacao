function solucao(numeros) {
    somaNumeros = numeros.reduce((acumulador, numeroAtual) => {
        return acumulador + numeroAtual;
    });

    let posicao = 1;
    let contador = 1;

    while (contador < somaNumeros) {
        posicao++;

        if (posicao > numeros.length) {
            posicao = 1;
        }
        contador++;
    }
    return posicao;
}

const numeros = [1, 3, 2, 1];
console.log(solucao(numeros));

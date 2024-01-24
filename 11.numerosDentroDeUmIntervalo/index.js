function solucao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return 'PERTENCE';
    }
    return 'NAO PERTENCE';
}

console.log(solucao(10, 5, 20))
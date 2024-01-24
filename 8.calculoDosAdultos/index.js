function solucao(lista) {
    const maioresDeIdade = lista.filter((idade) => {
        return idade >= 18;
    });

    if (maioresDeIdade.length === 0) {
        return 'CRESCA E APARECA';
    }

    let menorIdade = maioresDeIdade[0];
    for (const idade of maioresDeIdade) {
        if (idade < menorIdade) {
            menorIdade = idade;
        }
    }
    return menorIdade;
}

const lista = [15, 20, 25, 17, 30];
console.log(solucao(lista));
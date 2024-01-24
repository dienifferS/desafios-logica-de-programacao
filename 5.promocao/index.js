const precos = [200, 150, 50, 100];

function solucao(precos) {
    let menorValor = Math.min(...precos);

    if (precos.length >= 3) {
        const valoresIguais = precos.every((valor) => {
            return valor === precos[0];
        }
        );

        if (valoresIguais) {
            precos[0] = precos[0] * 0.5;
        } else {
            precos = precos.map(valor => {
                if (valor === menorValor) {
                    return valor * 0.5;
                }
                return valor;
            });
        }

        const total = precos.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual;
        });

        return total;
    }

    return precos.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    });
}

console.log(solucao(precos)); 
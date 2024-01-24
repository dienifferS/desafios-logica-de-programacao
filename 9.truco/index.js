function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];
    let indexCartaVirada = cartas.indexOf(carta);

    if (indexCartaVirada === cartas.length - 1) {
        indexCartaVirada = 0;
    } else {
        indexCartaVirada += 1;
    }

    return cartas[indexCartaVirada];
}

const cartaParaCima = 'A';
console.log(solucao(cartaParaCima)); 
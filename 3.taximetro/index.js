function solucao(min, km) {
    let valorTotalMinuto = 0;
    let valorTotalKm = 0;

    if (min <= 20) {
        valorTotalMinuto = min * 50;
    } else {
        const minutoAcima20 = min - 20;
        valorTotalMinuto = 20 * 50 + minutoAcima20 * 30;
    }

    if (km <= 10) {
        valorTotalKm = km * 70;
    } else {
        const kmAcima10 = km - 10;
        valorTotalKm = 10 * 70 + kmAcima10 * 50;
    }

    const valorTotalCorrida = valorTotalMinuto + valorTotalKm;
    const valorArredondado = Math.floor(valorTotalCorrida);

    return valorArredondado;
}

console.log(solucao(25, 11.5));

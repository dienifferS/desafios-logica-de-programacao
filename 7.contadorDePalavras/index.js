const texto = ' um  texto qualquer';

function contadorPalavras(texto) {
    const textoFormatado = texto.replace(/[^\w\s\n]/g, '');

    const palavras = textoFormatado.split(/\s+|\n+/);

    const filtrarPalavras = palavras.filter((palavra) => {
        return palavra.trim() !== ''
    });
    return filtrarPalavras.length;
}

function solucao(texto) {
    const quantidadePalavras = contadorPalavras(texto);
    console.log(quantidadePalavras);
}
console.log(contadorPalavras(texto));
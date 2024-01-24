const jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    }
];

function solucao(jogadores) {
    let jogada1 = 0;
    let jogada0 = 0;
    let nomeJogador1 = "";
    let nomeJogador0 = "";

    for (const jogador of jogadores) {
        if (jogador.jogada === 1) {
            jogada1++;
            nomeJogador1 = jogador.nome;
        } else if (jogador.jogada === 0) {
            jogada0++;
            nomeJogador0 = jogador.nome;
        }
    }

    if (jogada1 === 1) {
        return nomeJogador1;
    } else if (jogada0 === 1) {
        return nomeJogador0;
    } else {
        return "NINGUEM";
    }
}

console.log(solucao(jogadores));

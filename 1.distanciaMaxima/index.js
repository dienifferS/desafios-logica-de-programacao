function processData(input) {
    const linhas = input.trim().split("\n");
    const N = linhas[0];

    const coordenadas = [];
    for (const linha of linhas.slice(1)) {
        const coord = linha.split(" ");
        coordenadas.push({

            x: coord[0],
            y: coord[1]
        });
    }

    let maximaDistancia = 0;

    for (const coord1 of coordenadas) {
        for (const coord2 of coordenadas) {
            if (coord1 !== coord2) {
                const distanciaX = coord1.x - coord2.x;
                const distanciaY = coord1.y - coord2.y;
                const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

                if (distancia > maximaDistancia) {
                    maximaDistancia = distancia;
                }
            }
        }
    }

    console.log(maximaDistancia.toFixed(10));
}

const input = "3\n0 0\n0 3\n4 0";
processData(input);

function solucao(input) {
    if (input === input.toUpperCase()) {
        return input.toLowerCase();
    }

    if (input[0] === input[0].toLowerCase()
        && input.slice(1) === input.slice(1).toUpperCase()) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    } else {
        return input;
    }
}

const input1 = "lAPIS";
const input2 = "LAPIS";
console.log(solucao(input1));
console.log(solucao(input2));

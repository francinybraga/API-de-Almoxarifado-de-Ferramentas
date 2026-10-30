const ferramentas = []

export function cadastrarFerramentas(ferramenta) {
    ferramenta.push(ferramentas)
};

export function listarFerramentas() {
    return ferramentas
};

export function buscarFerramentaPorIndice(indice) {
    return ferramentas[indice]
};

export function atualizarFerramentas(indice, ferramenta) {
    return ferramentas[indice] = ferramenta
};

export function deletarFerramentas(indice) {
    return ferramentas.splice(indice, 1)
};
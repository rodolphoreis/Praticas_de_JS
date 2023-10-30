const notas = [ 3, 4, 2, 1, 5]

const soma = function(acu, atual){
    return acu + atual
}

console.log(notas.reduce(soma))
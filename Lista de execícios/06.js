function jurosSimples (capital, taxa, tempo){
    montante = (capital * taxa * tempo) + capital
    return montante
}
console.log(jurosSimples(1000, 0.1, 6))

function jurosCompostos (capital, taxa, tempo){
    montante = Math.floor(capital * ((taxa + 1)**tempo))
    return montante
}
console.log(jurosCompostos(1000, 0.1, 8))



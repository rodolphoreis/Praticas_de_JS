//SEM CALLBACK

const notas = [5.4, 6.2, 3.9, 7.0, 8.3, 8.9, 9.0, 9.9]

const notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7.0){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//COM CALLBACK

const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

// ou de forma mais elegante, porém com uma linha a mais.

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)


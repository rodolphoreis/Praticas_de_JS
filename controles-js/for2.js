const notas = [5.4, 6.7, 8.9, 7.7]

for(let i in notas){
    //console.log(i)
    console.log(i, notas[i])
}
//agora abaixo com objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 33,
    peso: 98
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
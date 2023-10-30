const pessoa = {
    nome: 'Ana',
    idade: 34,
    endereco: {
        rua: 'Saraiva',
        numero: 189
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)

//tambem posso "alterar" o nome dos meus identificadores para chamar de forma diferente

const {nome: n, idade: i} = pessoa

console.log(n, i)

//se eu chamar dentro do meu objeto algum identificador que não exista vai vir Undefined

const {peso, pais = true} = pessoa
console.log(peso, pais)

//para o pais eu atribui que se não tiver nada lá com essa informação me volte true, já no outro não atribui nada entao veio como undefined

const {endereco: {rua}} = pessoa
console.log(rua)

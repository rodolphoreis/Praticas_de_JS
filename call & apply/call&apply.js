function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

global.preco = 20
global.desconto = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    modelo: 'corsa',
    preco: 10000,
    desconto: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
//no call dou logo os parametros diretamente


console.log(getPreco.apply(carro, [0.17, '$']))
//já no apply os parametros ficam dentro de um array
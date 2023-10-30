const { json } = require("express")

const carrinho = [
'{"nome": "borracha", "preco": 3.45}',
'{"nome": "apagador", "preco": 8.16}',
'{"nome": "lapizeira", "preco": 12.69}',
'{"nome": "caneta", "preco": 1.95}'
]

const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco



const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
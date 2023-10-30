Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
'{"nome": "borracha", "preco": 3.45, "desconto": 0.10}',
'{"nome": "apagador", "preco": 8.16,"desconto": 0.10}',
'{"nome": "lapizeira", "preco": 12.69,"desconto": 0.10}',
'{"nome": "caneta", "preco": 1.95, "desconto": 0.10}'
]

const paraObjeto = json => JSON.parse(json)

const apenasPreco = produdo => produdo.preco

const desconto = function porc (){

    return apenasPreco *  (1 - 0.1)
}

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco).map2(desconto)


console.log(resultado)
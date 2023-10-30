const produtos = [
    {nome: 'geladeira', preco: 5690, fragil: true},
    {nome: 'chapinha', preco: 34.60, fragil: true},
    {nome: 'copos', preco: 9.90, fragil: true},
    {nome: 'TV', preco: 11600, fragil: true},
    {nome: 'ar-condicionado', preco: 2090, fragil: true},
    {nome: 'cafeteira', preco: 90, fragil: true},
    {nome: 'sofá', preco: 9990, fragil: false}
]

const caro = function(p){
    return p.preco > 2000
}

const cuidadoQuebra = function(p){
    return p.fragil
    
    //nao preciso colocar true ou falso pq o filter ja me retorna sempre um valor true por norma
}

const carrinho = produtos.filter(caro).filter(cuidadoQuebra)

console.log(carrinho)
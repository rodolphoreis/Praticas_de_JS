const produtos = [
    {nome: 'geladeira', preco: 5690, fragil: true},
    {nome: 'chapinha', preco: 34.60, fragil: true},
    {nome: 'copos', preco: 9.90, fragil: true},
    {nome: 'TV', preco: 11600, fragil: true},
    {nome: 'ar-condicionado', preco: 2090, fragil: true},
    {nome: 'cafeteira', preco: 90, fragil: true},
    {nome: 'sofá', preco: 9990, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 500

}))

const marcas = ['BMW', 'Mercedes', 'Ford', 'Audi']

function nomeMarcas (nome, indice){
    console.log(`${indice +1}. ${nome}`)
}
marcas.forEach(nomeMarcas)
marcas.forEach(fabricante => console.log(fabricante))
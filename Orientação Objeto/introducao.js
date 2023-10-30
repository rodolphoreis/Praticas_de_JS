/*const carro = new Object

carro.modelo = 'Corsa'
carro.valor = 10000
carro.ano = 2013
carro.estado = 'Semi-novo'

console.log(carro)*/

function funcionario (nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}
const func01 = funcionario('Maria', 760, 4)

const func02 = funcionario('Pedro', 850, 0)

console.log(func01.getSalario())

console.log(func02.getSalario(), func02.nome)

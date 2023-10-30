const ferrari = {
    modelo:'F40',
    velMax: 324,
    ano: 2023,
    matricula: 'AL'
}

const volvo = {
    modelo: 'V40',
    velMax: 280,
    __proto__: ferrari,
    portas: 4
}
const fiat = {
    modelo: 'Palio',
    velMax: 180,
    __proto__: volvo
}


console.log(fiat.portas)
console.log(fiat.ano)
console.log(volvo.matricula)
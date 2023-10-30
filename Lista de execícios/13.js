/*

13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/
const diasDaSemana = function(dia){
    switch(dia){
        case 7:
            return('Sábado')
            break
        case 6:
            return('Sexta')
            break
        case 5:
            return('Quinta')
            break
        case 4:
            return('Quarta')
            break
        case 3:
            return('Terça')
            break
        case 2:
            return('Segunda')
            break
        case 1:
            return('Domingo')
            break

        default:
            return ('Esse número não representa nenhum dia da semana.')
            break

    }
}
console.log(diasDaSemana(7))
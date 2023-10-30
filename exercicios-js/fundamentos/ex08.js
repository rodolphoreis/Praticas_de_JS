function recursosHumanos (horasTrabalhadasNoMes, valorPorHora){

    const imposto = 0.7

    const salarioBruto = horasTrabalhadasNoMes * valorPorHora

    return salarioBruto * imposto
}

console.log(recursosHumanos(160, 4.5))
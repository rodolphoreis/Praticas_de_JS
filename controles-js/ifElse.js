function mesAno (numero){
    if(numero == 1){
        console.log("Janeiro")
    }else if(numero == 2){
        console.log("Fevereiro")
    }else if(numero == 3){
        console.log("Março")
    }else if(numero == 4){
        console.log("Abril")
    }else if(numero == 5){
        console.log("Maio")
    }else if(numero == 6){
        console.log("Junho")
    }else if(numero == 7){
        console.log("Julho")
    }else if(numero == 8){
        console.log("Agosto")
    }else if(numero == 9){
        console.log("Setembro")
    }else if(numero == 10){
        console.log("Outubro")
    }else if(numero == 11){
        console.log("Novembro")
    }else if(numero == 12){
        console.log("Dezembro")
    }else if(numero < 1 || numero > 12){
        console.log("Não existe nenhum mês do ano correspondente a esse número.")
    }
}

mesAno(3)

// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial (numero) {

    if(numero == 0){
        return 1

    } else if(numero == 1){

        return 1
    
    }else{
        
        return numero * fatorial(numero - 1)

    }

}

console.log(fatorial(6))

/*function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))*/




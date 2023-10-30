function bhaskara(a, b,c){

    delta = b**2 - 4*a*c

    if(delta < 0){

        console.log('Delta é negativo')

        return delta

    }else{

        x1 = (-(b) + Math.sqrt(delta))/2*a

        x2 = (-(b) - Math.sqrt(delta))/2*a
    }
    
    return x1 && x2
}

console.log(bhaskara(1, 10, 24))
console.log(`x1 = ${x1} e x2 = ${x2}`)



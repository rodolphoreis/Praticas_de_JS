function triangulos (l1, l2, l3){
    if(l1 == l2  && l2 == l3){
        return 'Equilátero'
    }else if(l1 == l2 || l1 == l3 || l2 == l3){
        return 'Isósceles'
    }else
       return 'Escaleno'
}

console.log(triangulos(3, 3, 3))

console.log(triangulos(7, 3, 3))

console.log(triangulos(3, 5, 8))


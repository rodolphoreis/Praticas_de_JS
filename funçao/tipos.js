function soma(a, b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(5,4)(6)
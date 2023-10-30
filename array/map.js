const nums = [1, 2, 3, 4, 5]


let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

let resultado2 = resultado.map(function(e){
    return e * 3
})

console.log(resultado2)

let resultado3 = resultado2.map(function(e){
    return e / 10
})

console.log(resultado3)

console.log(nums)


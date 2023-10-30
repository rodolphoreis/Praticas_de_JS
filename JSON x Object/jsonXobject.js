const obj = { a: 2, b: 3, c: 7, soma(){ return a + b + c}}

console.log(JSON.stringify(obj)) // passando o objeto para srting

console.log(obj) 

//console.log(JSON.parse("{a:1, b:2, c:3}")) nao aceita sem aspas

//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) nao aceitou porque esta com aspas simples

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) //agora sim esta correto
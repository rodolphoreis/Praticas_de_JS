console.log('Digite as duas notas do aluno para saber a média:');

let n1 = 5;
let n2 = 1;
let media = (n1 + n2)/2;

console.log('Primeira nota ='+' '+n1+'.');
console.log('Segunda nota ='+' '+n2+'.');

console.log(`Com média ${media} você está:`);

if(media >= 7){
    console.log('Aprovado. Parabéns!')

}else if(media >= 5 && media<7){
    console.log('Recuperação!')

}else{
    console.log('Reprovado')
}


const alunos = [
    {aluno: "Maria", nota: 7.3, bolsita: false},
    {aluno: "joão", nota: 9.2, bolsita: true},
    {aluno: "Pedro", nota: 9.8, bolsita: true},
    {aluno: "Ana", nota: 5.1, bolsita: false},
    {aluno: "Ricardo", nota: 7.0, bolsita: true},
    {aluno: "Rodolpho", nota: 9.9, bolsita: false},
    {aluno: "José", nota: 2.9, bolsita: false},
    {aluno: "Roberto", nota: 9.9, bolsita: false},
    {aluno: "Fernanda", nota: 6.9, bolsita: true},
    {aluno: "Carlos", nota: 1.2, bolsita: false}
]

const saoBolsistas = alunos.map(function(a){
    return a.bolsita
})
if(saoBolsistas.length == true){
    console.log('sim')
}else{
    console.log('não')
}
console.log(alunos.map(a => a.bolsita).filter(function (b){
    return  b.bolsita == true
}))



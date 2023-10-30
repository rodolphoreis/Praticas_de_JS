function inverso (recebe){
    
    const tipo = typeof recebe

    switch(recebe){
        case true:
            console.log(false)
            break
        case false:
            console.log(true)
            break
       }

       if(typeof recebe == "number" ){
        const inv = -1
        console.log(recebe * inv)
       }
       
       if(typeof recebe != "number" && typeof recebe != "boolean"){
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`)
       
       }
}

console.log(inverso("ola"))
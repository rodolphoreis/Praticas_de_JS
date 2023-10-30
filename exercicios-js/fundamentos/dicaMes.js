/*function obterNomeDoMes(numero) {
    const meses = {

    1: "janeiro", 
    2: "fevereiro", 
    3: "março",
    4: "abril", 
    5: "maio", 
    6: "junho",
    7: "julho", 
    8: "agosto", 
    9: "setembro",
    10: "outubro", 
    11: "novembro", 
    12: "dezembro"

    }
    
    return meses[numero] || "Mês inválido. Por favor, insira um número de 1 a 12.";
}



    console.log(obterNomeDoMes(32))*/

    const obterNomeDoMes = (numMes) => {

        if (numMes >= 1 && numMes <= 12) {
        const data = new Date(0, numMes - 1);

        const nomeDoMes = data.toLocaleString('pt-BR', { month: 'long' });

        return nomeDoMes

        } else {
        return "Mês inválido"
        }
        
    }
    console.log(obterNomeDoMes(2))

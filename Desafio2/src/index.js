function calcularNivelRanqueadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = 
        vitorias < 10 ? "Ferro" :
        vitorias <= 20 ? "Bronze" :
        vitorias <= 50 ? "Prata" :
        vitorias <= 80 ? "Ouro" :
        vitorias <= 90 ? "Diamante" :
        vitorias <= 100 ? "Lendário" : "Imortal";
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplos de uso da função
console.log(calcularNivelRanqueadas(150, 2)); 


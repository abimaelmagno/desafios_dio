function calcularNivelRanqueadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = 
        saldoVitorias < 10 ? "Ferro" :
        saldoVitorias <= 20 ? "Bronze" :
        saldoVitorias <= 50 ? "Prata" :
        saldoVitorias <= 80 ? "Ouro" :
        saldoVitorias <= 90 ? "Diamante" :
        saldoVitorias <= 100 ? "Lendário" : "Imortal";
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplos de uso da função
console.log(calcularNivelRanqueadas(80, 30)); 


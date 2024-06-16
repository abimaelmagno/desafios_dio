console.log ("Hi people")
let primeiroNumero = 124
let segundoNumero = 34
console.log (primeiroNumero - segundoNumero)
console.log ("Abimael Magno " + "do Ouro Filho")
let precoProduto = 100.45
let valorComTaxa = precoProduto * 4
console.log ("Resultado do produto com taxa é " + valorComTaxa)
let pessoasDaCompra = 5
let valorPorPessoa = valorComTaxa / pessoasDaCompra
console.log ("Entre 4 amigos, o valor que ficou por pessoa " + valorPorPessoa)
//se fosse modulo
let operacaoModulo = valorComTaxa % pessoasDaCompra
console.log ("Valor que resta depois de dividir por partes iguais " + operacaoModulo)
//operadores de incremento e decremento
//incremento
operacaoModulo ++
console.log ("Novo valor com incremento " + operacaoModulo)
//decremento
operacaoModulo --
console.log ("Novo valor com decremento " + operacaoModulo)
//Operadores de atribuição
operacaoModulo += 0.2
console.log ("Novo valor com operadores de atribuição " + operacaoModulo)
operacaoModulo -= 0.0000000000000115
console.log ("Novo valor com operadores de atribuição " + operacaoModulo)
//Expressões aritmeticas
operacaoModulo = (((operacaoModulo * 2) + 10 ) - 4) / 2
console.log ("Novo valor com expressões artimeticas " + operacaoModulo)
//operadores de comparação
// = é atribuição, == é para compara valor, === compara o valor e o formato do conteúdo, !== é diferente    
let number = "1"
let resultado1 = number == 1
let resultado2 = number === 1
let resultado3 = number !== 1
console.log (resultado1 + ", " + resultado2 + " e " + resultado3)
//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado
console.log("O usuario está barrado ? " + ehCPFBloqueado ? "Sim" : "Não")
let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida ? "Sim" : "Não")
// AND ( && ) - 100 moedas coletadas E 1 item estrela, destacar que letras maiusculas e minisculas fazem diferença na comparação
let moedasColetadas = 99
let item = "estrela"
let result = (moedasColetadas >= 100) && (item === "estrela")
console.log(result? "Sim" : "Não")
// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item2 = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item2 === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair ? "Sim" : "Não")
// NOT  ( !) - nega uma afirmação, ! é uma negação e pode mudar a polidade de uma vairavel (se for sim, vira não)
let tempo2 = "chuva"
let horario = 8
let resultado = !((tempo2 !== "chuva") && (horario > 6))
console.log(resultado ? "Sim" : "Não")
//If, else
let possuiOvos = true
let itensComprados = ""
if(possuiOvos){
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados")
itensComprados = "Lasanha congelada"
}
console.log("item comprado: " + itensComprados)
//if,else if ,else
let nivelDeFome = "3"
if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome === 2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
}
//switch, case, break, default
let day = "quinta"; // Você pode mudar isso para outros dias
switch (day) {
  case "segunda":
    console.log("Dia de começar a semana com energia!");
    break;
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default:
    console.log("Final de semana! Descanse e divirta-se!");
}
//for
for (let contador = 1; contador <= 3; contador++) {
    console.log(contador)
    console.log("aumentando de um em um")
  }
// while
let jogadas = 0;
let cara = false;

while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}

console.log(`A moeda caiu cara após ${jogadas} jogadas!`);
// do while
let bolinhosComidos = 0;

do {
  bolinhosComidos++;
  console.log("Você comeu", bolinhosComidos, "bolinhos!");
} while (bolinhosComidos < 5);

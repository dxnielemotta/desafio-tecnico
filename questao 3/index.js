const faturamentoMensal = [
  { dia: 1, faturamento: 900 },
  { dia: 2, faturamento: 4200 },
  { dia: 3, faturamento: 2700 },
  { dia: 4, faturamento: 0 },
  { dia: 5, faturamento: 100 },
  { dia: 6, faturamento: 2500 },
  { dia: 7, faturamento: 0 },
  { dia: 8, faturamento: 5300 },
  { dia: 9, faturamento: 600 },
  { dia: 10, faturamento: 0 },
];

let menorFaturamento = faturamentoMensal[0].faturamento;
let maiorFaturamento = faturamentoMensal[0].faturamento;
let totalFaturamento = 0;
let diasComFaturamento = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
  const faturamento = faturamentoMensal[i].faturamento;

  if (faturamento < menorFaturamento) {
    menorFaturamento = faturamento;
  }

  if (faturamentoMensal[i].faturamento > maiorFaturamento) {
    maiorFaturamento = faturamento;
  }

  if (faturamento > 0) {
    totalFaturamento += faturamento;
    diasComFaturamento++;
  }
}

const mediaFaturamentoPorMes = totalFaturamento / diasComFaturamento;

let diasFaturamentoMaiorQueMedia = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
  if (faturamentoMensal[i].faturamento > mediaFaturamentoPorMes) {
    diasFaturamentoMaiorQueMedia++;
  }
}

console.log("Menor faturamento:", menorFaturamento.toFixed(1));
console.log("Maior faturamento:", maiorFaturamento.toFixed(1));
console.log("Média de faturamento por mês:", mediaFaturamentoPorMes.toFixed(1));
console.log(
  "Quantidade de dias em que o faturamento diário foi maior que a média mensal:",
  diasFaturamentoMaiorQueMedia
);

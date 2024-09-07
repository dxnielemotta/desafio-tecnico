const faturamentoMensal = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36786.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

let faturamentoTotal = 0;

for (let faturamento of faturamentoMensal) {
  faturamentoTotal += faturamento.valor;
}

const calcularPercentual = (faturamentoMensal, faturamentoTotal) => {
  for (let faturamento of faturamentoMensal) {
    let percentual = (faturamento.valor / faturamentoTotal) * 100;

    if (faturamento.estado === "Outros") {
      console.log(
        `Os outros estados possuem ${percentual.toFixed(
          2
        )}% do faturamento total.`
      );
      return;
    }

    console.log(
      `O estado ${faturamento.estado} possui ${percentual.toFixed(
        2
      )}% do faturamento total.`
    );
  }
};

//uso:
calcularPercentual(faturamentoMensal, faturamentoTotal);

const fibNumeros = [0, 1];

const gerarFibonacci = (numero) => {
  for (let i = 2; i < numero; i++) {
    const proximoNumero = fibNumeros[i - 2] + fibNumeros[i - 1];
    fibNumeros.push(proximoNumero);
  }

  console.log(fibNumeros);
  return;
};

const verificarFibonacci = (numero) => {
  gerarFibonacci(numero);
  for (let elemento of fibNumeros) {
    if (elemento === numero) {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
      return;
    }
  }

  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
};

//uso:
verificarFibonacci(8);

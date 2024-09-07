let stringInvertida = "";

const inverterString = (string) => {
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }

  return stringInvertida;
};

const string = "Teste de string invertida";
const invertida = inverterString(string);

console.log(`String original: ${string}`);
console.log(`String invertida: ${invertida}`);

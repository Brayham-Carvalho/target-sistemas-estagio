// Função que verifica se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero: number): boolean {
  // Inicializando os dois primeiros números da sequência de Fibonacci
  let a: number = 0;
  let b: number = 1;

  // Itera até que 'a' seja maior ou igual ao número fornecido
  while (a < numero) {
    // Atualiza os valores de 'a' e 'b' para a sequência seguinte
    [a, b] = [b, a + b];
  }

  // Retorna verdadeiro se o número for igual a 'a', ou seja, pertence à sequência
  return a === numero;
}

// Simulando a entrada do usuário no Nodejs
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicita ao usuário que insira um número
readline.question("Digite um número: ", (input: string) => {
  // Converte a entrada do usuário (string) para um número inteiro
  const numero: number = parseInt(input, 10);

  // Verifica se o número pertence à sequência de Fibonacci
  if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }

  // Fecha a interface de leitura
  readline.close();
});

// Função que inverte uma palavra sem usar funções prontas como reverse
function inverterPalavra(palavra: string): string {
  // Pegando o tamanho da palavra
  const tamanho: number = palavra.length;

  // Inicializando uma string vazia para armazenar a palavra invertida
  let palavraInvertida: string = "";

  // Iterando do último caractere até o primeiro
  for (let i = tamanho - 1; i >= 0; i--) {
    // Adiciona o caractere atual à nova string invertida
    palavraInvertida += palavra[i];
  }

  // Retorna a palavra invertida
  return palavraInvertida;
}

// Simulando a entrada do usuário no Nodejs
const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicita ao usuário que insira uma palavra
readline1.question("Digite uma palavra: ", (input: string) => {
  // Chama a função para inverter a palavra e exibe o resultado
  console.log(`A palavra invertida é: ${inverterPalavra(input)}`);

  // Fecha a interface de leitura
  readline1.close();
});

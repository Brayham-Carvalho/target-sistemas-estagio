/* Declara as variáveis usadas na soma */
let INDICE: number = 13;
let SOMA: number = 0;
let K: number = 0;

/* Laço de repetição, repete enquanto a condição for verdadeira */
while (K < INDICE) {
  K++; /* A cada repetição a variável K soma 1 */
  SOMA = SOMA + K;
}

console.log(SOMA);

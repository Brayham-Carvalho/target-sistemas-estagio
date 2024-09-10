# Teste Técnico - Estágio Target Sistemas

Este projeto contém as soluções para o teste técnico do processo seletivo de Estágio Análise e Desenvolvimento, desenvolvido em TypeScript.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
src/
  ├── questao1.ts
  ├── questao2.ts
  ├── questao3.ts
  ├── questao4.ts
  └── questao5.ts
```

Cada arquivo na pasta `src` corresponde a uma questão do teste.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (geralmente vem junto com o Node.js)
- TypeScript instalado globalmente (opcional):

 ```
npm install -g typescript
 ```


## Configuração

1. Clone este repositório:
   ```
   git clone https://github.com/Brayham-Carvalho/target-sistemas-estagio.git
   ```

2. Navegue até a pasta do projeto:
   ```
   cd target-sistemas-estagio
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Executando as Soluções

Para executar cada questão individualmente, use o seguinte comando:

```
npx ts-node src/questaoX.ts
```

Substitua `X` pelo número da questão que deseja executar (1, 2, 3, 4 ou 5).

### Exemplo:

Para executar a solução da questão 1:
```
npx ts-node src/questao1.ts
```
## Alternativa:
Se você tiver o TypeScript instalado globalmente, também pode compilar e rodar o arquivo da seguinte maneira:

1. Compile o arquivo TypeScript:
```
tsc src/questaoX.ts
```
2. Execute o arquivo JavaScript gerado:
```
node src/questaoX.js
```

## Notas Adicionais

- Certifique-se de que todas as dependências estão instaladas antes de executar os scripts.
- Cada questão é independente e pode ser executada separadamente.
- Os comentários no código explicam a lógica utilizada em cada solução.

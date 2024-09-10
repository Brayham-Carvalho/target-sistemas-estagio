import * as fs from "fs";
import * as path from "path";

// Interface que define a estrutura de uma entrada de faturamento
interface FaturamentoEntry {
  dia: number;
  valor: number;
}

// Interface que define a estrutura das estatísticas calculadas
interface FaturamentoStats {
  menorValor: number;
  maiorValor: number;
  diasAcimaDaMedia: number;
  mediaFaturamento: number;
}

// Classe que faz o processamento do faturamento
class FaturamentoProcessor {
  private filePath: string;

  // O construtor recebe o nome do arquivo e constrói o caminho completo
  constructor(fileName: string) {
    // Junta o caminho do diretório atual com o diretório "data" e o nome do arquivo
    this.filePath = path.join(__dirname, "data", fileName);
  }

  // Função privada para ler o arquivo JSON e retorná-lo como um array de FaturamentoEntry
  private readJsonFile(): FaturamentoEntry[] {
    const fileContent = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(fileContent) as FaturamentoEntry[];
  }

  // Função privada que calcula as estatísticas a partir dos dados de faturamento
  private calcularEstatisticas(data: FaturamentoEntry[]): FaturamentoStats {
    // Filtra os valores maiores que zero (para remover possíveis dias sem faturamento) e mapeia para um array de números
    const valoresValidos = data
      .filter((entry) => entry.valor > 0)
      .map((entry) => entry.valor);

    // Calcula o menor valor entre os dias válidos
    const menorValor = Math.min(...valoresValidos);

    // Calcula o maior valor entre os dias válidos
    const maiorValor = Math.max(...valoresValidos);

    // Soma todos os valores de faturamento válidos
    const somaTotal = valoresValidos.reduce((sum, valor) => sum + valor, 0);

    // Calcula a média de faturamento
    const mediaFaturamento = somaTotal / valoresValidos.length;

    // Conta quantos dias têm faturamento acima da média
    const diasAcimaDaMedia = valoresValidos.filter(
      (valor) => valor > mediaFaturamento
    ).length;

    // Retorna as estatísticas calculadas
    return { menorValor, maiorValor, diasAcimaDaMedia, mediaFaturamento };
  }

  // Função pública que processa os dados de faturamento
  public processar(): void {
    try {
      // Lê os dados do arquivo JSON
      const dados = this.readJsonFile();

      // Calcula as estatísticas com base nos dados lidos
      const estatisticas = this.calcularEstatisticas(dados);

      // Exibe o menor valor de faturamento
      console.log(
        `Menor valor de faturamento: R$ ${estatisticas.menorValor.toFixed(2)}`
      );

      // Exibe o maior valor de faturamento
      console.log(
        `Maior valor de faturamento: R$ ${estatisticas.maiorValor.toFixed(2)}`
      );

      // Exibe a média mensal de faturamento
      console.log(
        `Média mensal de faturamento: R$ ${estatisticas.mediaFaturamento.toFixed(
          2
        )}`
      );

      // Exibe o número de dias com faturamento acima da média
      console.log(
        `Número de dias com faturamento acima da média: ${estatisticas.diasAcimaDaMedia}`
      );
    } catch (error) {
      // Captura e exibe erros que possam ocorrer durante a leitura do arquivo ou processamento dos dados
      console.error("Erro ao processar o arquivo de faturamento:", error);
    }
  }
}

// Instancia a classe FaturamentoProcessor passando o nome do arquivo JSON
const processor = new FaturamentoProcessor("dados.json");

// Chama o método processar para ler e calcular as estatísticas
processor.processar();

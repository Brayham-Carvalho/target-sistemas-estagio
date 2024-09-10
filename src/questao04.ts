// Interface que define o formato do objeto de faturamento por estado
interface FaturamentoEstados {
  [estado: string]: number;
}

// Classe que calcula os percentuais de faturamento por estado
class CalculadoraFaturamento {
  private faturamento: FaturamentoEstados;

  // O construtor recebe um objeto de faturamento e o armazena
  constructor(faturamento: FaturamentoEstados) {
    this.faturamento = faturamento;
  }

  // Método privado para calcular o faturamento total somando os valores dos estados
  private calcularTotalFaturamento(): number {
    // Usa Object.values para obter os valores (faturamentos) e reduce para somá-los
    return Object.values(this.faturamento).reduce(
      (total, valor) => total + valor,
      0
    );
  }

  // Método público que calcula o percentual de cada estado com base no faturamento total
  public calcularPercentuais(): Map<string, number> {
    const totalFaturamento = this.calcularTotalFaturamento();
    const percentuais = new Map<string, number>();

    // Itera sobre as entradas (estado e valor) do objeto de faturamento
    for (const [estado, valor] of Object.entries(this.faturamento)) {
      // Calcula o percentual de cada estado
      const percentual = (valor / totalFaturamento) * 100;
      // Armazena o percentual no Map, arredondado para 2 casas decimais
      percentuais.set(estado, Number(percentual.toFixed(2)));
    }

    return percentuais;
  }

  // Método público que exibe os resultados no console
  public exibirResultados(): void {
    const percentuais = this.calcularPercentuais();
    console.log("Percentual de representação por estado:");

    // Itera sobre o Map e exibe cada estado com seu respectivo percentual
    percentuais.forEach((percentual, estado) => {
      console.log(`${estado}: ${percentual}%`);
    });
  }
}

// Dados de faturamento para os estados
const dadosFaturamento: FaturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Cria uma instância da CalculadoraFaturamento passando os dados de faturamento
const calculadora = new CalculadoraFaturamento(dadosFaturamento);

// Chama o método exibirResultados para mostrar os percentuais no console
calculadora.exibirResultados();

// Exemplo de como obter os percentuais como um Map para uso adicional
const percentuais = calculadora.calcularPercentuais();
console.log("\nPercentuais como Map:");
console.log(percentuais);

/**
 * Analisa as propriedades do número e calcula o fatorial se for válido.
 * @param {number} numero - O número a ser analisado e calculado.
 */
function analisarECalcularFatorial(numero) {
    // 1. Validação inicial de tipo
    if (typeof numero !== 'number' || Number.isNaN(numero)) {
      console.log(`Entrada: ${numero} -> Erro: Não é um número válido.`);
      return;
    }
  
    // 2. Verifica se é Inteiro ou Decimal
    const ehInteiro = Number.isInteger(numero);
    const tipoDecimal = ehInteiro ? "INTEIRO" : "DECIMAL";
  
    // 3. Verifica se é Positivo, Negativo ou Zero
    let sinal = "";
    if (numero > 0) {
      sinal = "POSITIVO";
    } else if (numero < 0) {
      sinal = "NEGATIVO";
    } else {
      sinal = "ZERO (Neutro)";
    }
  
    // Exibe a análise do número no console
    console.log(`-------------------------------------------`);
    console.log(`Análise do número [${numero}]:`);
    console.log(`> Tipo: ${tipoDecimal}`);
    console.log(`> Sinal: ${sinal}`);
  
    // 4. Validação para o cálculo do Fatorial
    if (!ehInteiro) {
      console.log(`> Status: Não é possível calcular o fatorial de números decimais.`);
      return;
    }
    if (numero < 0) {
      console.log(`> Status: Não é possível calcular o fatorial de números negativos.`);
      return;
    }
  
    // 5. Cálculo do Fatorial (se passou nas validações acima)
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
  
    console.log(`> Resultado do Fatorial (${numero}!): ${resultado}`);
  }
  
  // === EXECUÇÃO DOS TESTES ===
  analisarECalcularFatorial(5);    // Inteiro Positivo (Calcula)
  analisarECalcularFatorial(-3);   // Inteiro Negativo (Não calcula)
  analisarECalcularFatorial(4.5);  // Decimal Positivo (Não calcula)
  analisarECalcularFatorial(0);    // Zero Inteiro (Calcula)
  
  
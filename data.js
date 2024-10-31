const questoes = [
    {
      id: 1,
      capitulo: '1.6',
      numero: '1(a)',
      titulo: '3 - x < 5 + 3x',
      resolucao: `
        Passo 1: Passamos os termos com x para o mesmo lado da inequação:<br>
        -x - 3x < 5 - 3<br>
        Passo 2: Simplificamos:<br>
        -4x < 2<br>
        Passo 3: Dividimos ambos os lados por -4 (lembrando de inverter o sinal da inequação):<br>
        x > -1/2<br>
        <strong>Solução:</strong> x ∈ (-1/2, ∞)
      `
    },
    {
      id: 2,
      capitulo: '1.6',
      numero: '1(b)',
      titulo: '2x - 5 < 1/3 + 3x/4 + (1 - x)/3',
      resolucao: `
        Passo 1: Multiplicamos todos os termos por 12 para eliminar os denominadores:<br>
        12(2x - 5) < 12 * (1/3) + 12 * (3x/4) + 12 * (1 - x)/3<br>
        24x - 60 < 4 + 9x + 4 - 4x<br>
        Passo 2: Reorganizamos os termos:<br>
        24x - 9x + 4x < 60 + 8<br>
        11x < 68<br>
        Passo 3: Simplificamos para encontrar o valor de x:<br>
        x < 68/11<br>
        <strong>Solução:</strong> x < 6.18
      `
    },
    {
      id: 3,
      capitulo: '1.6',
      numero: '1(c)',
      titulo: '2 > -3 - 3x ≥ -7',
      resolucao: `
        Passo 1: Resolvemos cada parte da inequação separadamente.<br>
        Para a primeira parte: 2 > -3 - 3x<br>
        -3x > -5<br>
        x < 5/3<br>
        Para a segunda parte: -3 - 3x ≥ -7<br>
        -3x ≥ -4<br>
        x ≤ 4/3<br>
        <strong>Solução:</strong> x ∈ [4/3, 5/3]
      `
    },
    {
      id: 4,
      capitulo: '1.6',
      numero: '1(d)',
      titulo: '5/x < 3/4',
      resolucao: `
        Passo 1: Multiplicamos ambos os lados por 4x (assumindo que x > 0):<br>
        5 * 4 < 3 * x<br>
        20 < 3x<br>
        Passo 2: Dividimos ambos os lados por 3:<br>
        x > 20/3<br>
        <strong>Solução:</strong> x ∈ (20/3, ∞)
      `
    },
    {
      id: 5,
      capitulo: '1.6',
      numero: '1(e)',
      titulo: 'x² ≤ 9',
      resolucao: `
        Passo 1: Reescrevemos como uma inequação dupla:<br>
        -3 ≤ x ≤ 3<br>
        <strong>Solução:</strong> x ∈ [-3, 3]
      `
    },
    {
      id: 6,
      capitulo: '1.6',
      numero: '1(f)',
      titulo: 'x² - 3x + 2 > 0',
      resolucao: `
        Passo 1: Fatoramos a expressão quadrática:<br>
        (x - 1)(x - 2) > 0<br>
        Passo 2: Analisamos os sinais nos intervalos determinados pelas raízes x = 1 e x = 2:<br>
        Intervalos: x ∈ (-∞, 1), x ∈ (1, 2), x ∈ (2, ∞)<br>
        A inequação é satisfeita para x < 1 ou x > 2.<br>
        <strong>Solução:</strong> x ∈ (-∞, 1) ∪ (2, ∞)
      `
    },
    {
        id: 7,
        capitulo: '1.6',
        numero: '1(g)',
        titulo: '1 - x - 2x² ≥ 0',
        resolucao: `
          Passo 1: Reorganizamos a inequação para uma forma padrão:<br>
          -2x² - x + 1 ≥ 0<br>
          Passo 2: Resolvemos a equação quadrática associada: -2x² - x + 1 = 0<br>
          Usamos a fórmula quadrática para encontrar as raízes:<br>
          x = [-(-1) ± √((-1)² - 4 * (-2) * 1)] / (2 * -2)<br>
          x = [1 ± √(1 + 8)] / -4<br>
          x = [1 ± 3] / -4<br>
          Raízes: x = -1 e x = 1/2<br>
          Passo 3: Verificamos os intervalos e sinais:<br>
          Intervalos: x ∈ [-∞, -1], x ∈ [-1, 1/2], x ∈ [1/2, ∞]<br>
          O intervalo que satisfaz a inequação é x ∈ [-1, 1/2].<br>
          <strong>Solução:</strong> x ∈ [-1, 1/2]
        `
      },
      {
        id: 8,
        capitulo: '1.6',
        numero: '1(h)',
        titulo: '(x + 1) / (2 - x) < x / (3 + x)',
        resolucao: `
          Passo 1: Multiplicamos ambos os lados pela expressão comum (2 - x)(3 + x), assumindo que os sinais e domínio são mantidos.<br>
          Passo 2: Simplificamos a expressão resultante e analisamos os intervalos possíveis.<br>
          Esta inequação requer uma análise detalhada de sinais para determinar a faixa de x.<br>
          <strong>Solução:</strong> x ∈ (intervalos determinados pela análise de sinal e domínio)
        `
      },
      {
        id: 9,
        capitulo: '1.6',
        numero: '1(i)',
        titulo: 'x³ + 1 > x² + x',
        resolucao: `
          Passo 1: Reorganizamos a inequação:<br>
          x³ - x² - x + 1 > 0<br>
          Passo 2: Fazemos a fatoração por agrupamento:<br>
          x²(x - 1) - 1(x - 1) > 0<br>
          (x² - 1)(x - 1) > 0<br>
          Passo 3: Fatoramos mais uma vez:<br>
          (x - 1)(x + 1)(x - 1) > 0<br>
          Simplificando, obtemos:<br>
          (x - 1)²(x + 1) > 0<br>
          Passo 4: Analisamos os sinais e intervalos:<br>
          As raízes são x = 1 e x = -1.<br>
          Como (x - 1)² é sempre positivo, a inequação é satisfeita para x > 1.<br>
          <strong>Solução:</strong> x ∈ (1, ∞)
        `
      },
      {
        id: 10,
        capitulo: '1.6',
        numero: '1(j)',
        titulo: '(x² - 1)(x + 4) ≤ 0',
        resolucao: `
          Passo 1: Identificamos as raízes da expressão: x = ±1 e x = -4.<br>
          Passo 2: Analisamos os intervalos determinados pelas raízes: x ∈ (-∞, -4), x ∈ (-4, -1), x ∈ (-1, 1), x ∈ (1, ∞).<br>
          Verificamos os sinais em cada intervalo para determinar onde a expressão é ≤ 0.<br>
          <strong>Solução:</strong> x ∈ [-4, -1] ∪ [1, ∞)
        `
      },
      {
        id: 11,
        capitulo: '1.6',
        numero: '1(k)',
        titulo: '2/(x - 2) ≤ (x + 2)/(x - 2) ≤ 1',
        resolucao: `
          Passo 1: Isolamos as inequações separadamente:<br>
          (i) 2/(x - 2) ≤ (x + 2)/(x - 2)<br>
          (ii) (x + 2)/(x - 2) ≤ 1<br>
          Passo 2: Analisando cada caso:<br>
          Para a primeira parte, resolvemos como uma inequação simples.<br>
          Para a segunda parte, resolvemos o denominador e o numerador.<br>
          Solução final depende da combinação dos intervalos encontrados.<br>
          <strong>Solução:</strong> Determinada pela análise de sinal e domínio específico.
        `
      },
      {
        id: 12,
        capitulo: '1.6',
        numero: '1(l)',
        titulo: 'x⁴ ≥ x²',
        resolucao: `
          Passo 1: Reescrevemos como x⁴ - x² ≥ 0.<br>
          Passo 2: Fatoramos a expressão: x²(x² - 1) ≥ 0.<br>
          Passo 3: Fatoramos novamente: x²(x - 1)(x + 1) ≥ 0.<br>
          Analisamos os intervalos determinados pelas raízes: x = 0, x = ±1.<br>
          <strong>Solução:</strong> x ∈ (-∞, -1] ∪ [1, ∞)
        `
      },
      {
        id: 13,
        capitulo: '1.6',
        numero: '1(m)',
        titulo: 'x/(x - 3) < 4',
        resolucao: `
          Passo 1: Reescrevemos como x < 4(x - 3).<br>
          Passo 2: Simplificamos para encontrar os valores de x.<br>
          Esta inequação requer análise adicional de sinais para determinar o intervalo válido.<br>
          <strong>Solução:</strong> Intervalo determinado pela análise de sinal e domínio.
        `
      },
      {
        id: 14,
        capitulo: '1.6',
        numero: '1(n)',
        titulo: '1/2x - 3 / (4 + x) > 1',
        resolucao: `
          Passo 1: Multiplicamos ambos os lados por (4 + x) assumindo x ≠ -4.<br>
          Passo 2: Simplificamos para encontrar o intervalo de x.<br>
          <strong>Solução:</strong> Intervalo determinado pela análise de sinal e domínio.
        `
      },
      {
        id: 15,
        capitulo: '1.6',
        numero: '1(o)',
        titulo: '3/(x - 5) ≤ 2',
        resolucao: `
          Passo 1: Multiplicamos ambos os lados por (x - 5) assumindo x > 5.<br>
          Passo 2: Simplificamos para encontrar o intervalo de x.<br>
          <strong>Solução:</strong> Intervalo determinado pela análise de sinal e domínio.
        `
      },
      {
        id: 16,
        capitulo: '1.6',
        numero: '1(p)',
        titulo: 'x³ - x² - x - 2 > 0',
        resolucao: `
          Passo 1: Fatoramos a expressão:<br>
          (x - 1)(x² + x + 2) > 0<br>
          Passo 2: Analisamos os sinais para cada intervalo com a raiz x = 1.<br>
          <strong>Solução:</strong> Intervalo determinado pela análise de sinal.
        `
      },
      {
        id: 17,
        capitulo: '1.6',
        numero: '1(q)',
        titulo: 'x³ - 3x + 2 ≤ 0',
        resolucao: `
          Passo 1: Fatoramos a expressão:<br>
          x³ - 3x + 2 = (x - 1)(x² + x - 2) ≤ 0<br>
          Passo 2: Fatoramos ainda mais o segundo termo:<br>
          (x - 1)(x - 1)(x + 2) ≤ 0<br>
          Passo 3: Analisamos os intervalos baseados nas raízes x = -2 e x = 1.<br>
          <strong>Solução:</strong> x ∈ [-2, 1]
        `
      },
      {
        id: 18,
        capitulo: '1.6',
        numero: '1(r)',
        titulo: '1/(x + 1) ≥ 3/(x - 2)',
        resolucao: `
          Passo 1: Multiplicamos ambos os lados por (x + 1)(x - 2), assumindo as restrições de domínio:<br>
          Passo 2: Simplificamos a inequação para obter uma expressão em termos de x.<br>
          <strong>Solução:</strong> Determinada pela análise de sinal e domínio.
        `
      },
      {
        id: 19,
        capitulo: '1.6',
        numero: '1(s)',
        titulo: '8x³ - 4x² - 2x + 1 < 0',
        resolucao: `
          Passo 1: Fatoramos a expressão:<br>
          (2x - 1)(4x² + 2x - 1) < 0<br>
          Passo 2: Analisamos os sinais nos intervalos baseados nas raízes.<br>
          <strong>Solução:</strong> Intervalo determinado pela análise de sinal.
        `
      },
      {
        id: 20,
        capitulo: '1.6',
        numero: '1(t)',
        titulo: '12x³ - 20x² ≥ -11x + 2',
        resolucao: `
          Passo 1: Reorganizamos para obter uma inequação do tipo f(x) ≥ 0:<br>
          12x³ - 20x² + 11x - 2 ≥ 0<br>
          Passo 2: Fatoramos ou usamos métodos numéricos para encontrar as raízes.<br>
          <strong>Solução:</strong> Intervalo determinado pela análise de sinal.
        `
      }

      
      
    

    

  ];
  

  const questoesParte2 = [
    {
      id: 21,
      capitulo: '1.6',
      numero: '2(a)',
      titulo: '15x - 3 = 12',
      resolucao: `
        Passo 1: Isolamos o termo com x:<br>
        15x = 12 + 3<br>
        15x = 15<br>
        Passo 2: Dividimos ambos os lados por 15:<br>
        x = 1<br>
        <strong>Solução:</strong> x = 1
      `
    },
    {
      id: 22,
      capitulo: '1.6',
      numero: '2(b)',
      titulo: '|-4 + 12x| = 7',
      resolucao: `
        Passo 1: Consideramos os dois casos da equação modular:<br>
        Caso 1: -4 + 12x = 7<br>
        12x = 11<br>
        x = 11/12<br><br>
        Caso 2: -4 + 12x = -7<br>
        12x = -3<br>
        x = -1/4<br>
        <strong>Solução:</strong> x = 11/12 ou x = -1/4
      `
    },
    {
      id: 23,
      capitulo: '1.6',
      numero: '2(c)',
      titulo: '12x - 3 = |7x - 5|',
      resolucao: `
        Passo 1: Consideramos os dois casos da equação modular:<br>
        Caso 1: 12x - 3 = 7x - 5<br>
        5x = -2<br>
        x = -2/5<br><br>
        Caso 2: 12x - 3 = -(7x - 5)<br>
        12x - 3 = -7x + 5<br>
        19x = 8<br>
        x = 8/19<br>
        <strong>Solução:</strong> x = -2/5 ou x = 8/19
      `
    },
    {
      id: 24,
      capitulo: '1.6',
      numero: '2(d)',
      titulo: '(x + 2) / (x - 2) = 5',
      resolucao: `
        Passo 1: Multiplicamos ambos os lados por (x - 2), assumindo que x ≠ 2:<br>
        x + 2 = 5(x - 2)<br>
        x + 2 = 5x - 10<br>
        -4x = -12<br>
        x = 3<br>
        <strong>Solução:</strong> x = 3 (com x ≠ 2)
      `
    },
    {
      id: 25,
      capitulo: '1.6',
      numero: '2(e)',
      titulo: '(3x + 8) / (2x - 3) = 4',
      resolucao: `
        Passo 1: Multiplicamos ambos os lados por (2x - 3), assumindo que x ≠ 3/2:<br>
        3x + 8 = 4(2x - 3)<br>
        3x + 8 = 8x - 12<br>
        -5x = -20<br>
        x = 4<br>
        <strong>Solução:</strong> x = 4 (com x ≠ 3/2)
      `
    },
    {
      id: 26,
      capitulo: '1.6',
      numero: '2(f)',
      titulo: '13x + 2 = 5 - x',
      resolucao: `
        Passo 1: Isolamos os termos com x:<br>
        13x + x = 5 - 2<br>
        14x = 3<br>
        Passo 2: Dividimos ambos os lados por 14:<br>
        x = 3/14<br>
        <strong>Solução:</strong> x = 3/14
      `
    },
    {
      id: 27,
      capitulo: '1.6',
      numero: '2(g)',
      titulo: '9|x| - 11 = x',
      resolucao: `
        Passo 1: Consideramos os dois casos da equação modular:<br>
        Caso 1: 9x - 11 = x<br>
        8x = 11<br>
        x = 11/8<br><br>
        Caso 2: 9(-x) - 11 = x<br>
        -9x - 11 = x<br>
        -10x = 11<br>
        x = -11/10<br>
        <strong>Solução:</strong> x = 11/8 ou x = -11/10
      `
    },
    {
      id: 28,
      capitulo: '1.6',
      numero: '2(h)',
      titulo: '2x - 7 = |x| + 1',
      resolucao: `
        Passo 1: Consideramos os dois casos da equação modular:<br>
        Caso 1: 2x - 7 = x + 1<br>
        x = 8<br><br>
        Caso 2: 2x - 7 = -x - 1<br>
        3x = 6<br>
        x = 2<br>
        <strong>Solução:</strong> x = 8 ou x = 2
      `
    }
  ];
  
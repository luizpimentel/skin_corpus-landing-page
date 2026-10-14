import type { MethodStep, Treatment } from '../types';

export const DERMA_METHOD_STEPS: MethodStep[] = [
  {
    letter: 'D',
    title: 'Diagnóstico Profundo',
    description:
      'Avaliação clínica minuciosa da pele analisando camadas, grau de flacidez, perda de volume, textura e simetria facial, além de histórico de hábitos e fatores biológicos externos.',
  },
  {
    letter: 'E',
    title: 'Escuta Ativa',
    description:
      'Abordagem empática e verdadeiramente humanizada, acolhendo as queixas emocionais, histórico de tratamentos anteriores e expectativas reais da paciente.',
  },
  {
    letter: 'R',
    title: 'Roteiro de Soluções Personalizadas',
    description:
      'Elaboração de um plano transparente detalhando "o que fazer", "quando fazer", "por que fazer" e "quais tecnologias utilizar", fugindo de pacotes e combos genéricos.',
  },
  {
    letter: 'M',
    title: 'Melhora da Autoestima',
    description:
      'Foco em resultados que vão muito além do espelho: rejuvenescimento com naturalidade, realçando sua própria identidade e devolvendo frescor e autoconfiança.',
  },
  {
    letter: 'A',
    title: 'Acompanhamento Eficaz',
    description:
      'Suporte próximo e atencioso via canal direto com a Dra. Fernanda Almeida e sua equipe clínica para esclarecer dúvidas, acompanhar a evolução e ajustar condutas.',
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'ultraformer-mpt',
    name: 'Ultraformer MPT (Ultrassom Microfocado)',
    type: 'Ultrassom Micro & Macrofocado',
    tagline: 'Lifting não cirúrgico e estímulo profundo de colágeno',
    description:
      'Tecnologia de ponta para estímulo profundo de colágeno e ancoragem muscular. Promove pele mais firme, contornos definidos e efeito lifting progressivo sem tempo de recuperação.',
    benefits: [
      'Estímulo dérmico e muscular SMAS',
      'Definição do contorno mandibular e papada',
      'Melhora da sustentação sem cortes nem repouso',
      'Protocolos faciais e corporais personalizados',
    ],
  },
  {
    id: 'bioestimuladores-colageno',
    name: 'Bioestimuladores de Colágeno',
    type: 'Injetáveis de Alta Performance',
    tagline: 'Restauração da firmeza e densidade natural da pele',
    description:
      'Substâncias biocompatíveis (como ácido poli-L-lático e hidroxiapatita de cálcio) estrategicamente injetadas para ativar os fibroblastos e a produção contínua do seu próprio colágeno.',
    benefits: [
      'Tratamento da flacidez facial e de pescoço',
      'Resultados graduais e de longa duração',
      'Melhora da espessura, viço e textura da derme',
      'Indicação dosada conforme a maturidade cutânea',
    ],
  },
  {
    id: 'toxina-botulinica',
    name: 'Toxina Botulínica Natural',
    type: 'Modulação Muscular Expressiva',
    tagline: 'Expressões leves e suaves sem "congelar o rosto"',
    description:
      'Aplicação estratégica e altamente conservadora focada em suavizar rugas dinâmicas e linhas de expressão (testa, glabela e pés de galinha), mantendo sua movimentação natural e identidade.',
    benefits: [
      'Preservação total da mímica e expressividade facial',
      'Prevenção de vincos e fraturas dérmicas profundas',
      'Efeito descanso com suavidade e discrição',
      'Planejamento individualizado ponto a ponto',
    ],
  },
  {
    id: 'acido-hialuronico',
    name: 'Preenchimento com Ácido Hialurônico',
    type: 'Harmonização e Reposicionamento',
    tagline: 'Harmonia, proporções naturais e alívio do ar cansado',
    description:
      'Restauração de compartimentos de gordura perdidos com a idade, refinamento de contornos (olheiras, sulco nasogeniano, mandíbula e lábios) com máxima precisão e delicadeza.',
    benefits: [
      'Atenuação de sombras e sinais de cansaço',
      'Recuperação do triângulo da juventude',
      'Hidratação profunda e volume proporcional',
      'Produtos de padrão ouro com alta biocompatibilidade',
    ],
  },
  {
    id: 'laser-etherea',
    name: 'Laser Etherea (Manchas e Viço)',
    type: 'Plataforma Laser Multifuncional',
    tagline: 'Uniformização do tom, clareamento e renovação de viço',
    description:
      'Tecnologia padrão ouro para tratar manchas solares, melasma, vasinhos faciais, poros dilatados e irregularidades de textura, promovendo renovação profunda e luminosidade.',
    benefits: [
      'Clareamento seguro de manchas e hipercromias',
      'Fechamento de poros e viço acetinado',
      'Estímulo de colágeno superficial e intermediário',
      'Segurança comprovada para múltiplos fototipos',
    ],
  },
];

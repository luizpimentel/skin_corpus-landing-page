import type { Protocol } from '../types';

export const PROTOCOLS: Protocol[] = [
  {
    id: 'mulheres',
    title: 'Emagrecimento & Menopausa',
    tagline: 'Equilíbrio metabólico e resgate da vitalidade feminina',
    genderLabel: 'Para Mulheres',
    targetAudience: 'Mulheres entre 30 e 50 anos em transição hormonal ou com resistência à perda de peso.',
    goal: 'Objetivo do Programa: Redução de até ~10kg em 60 dias com estratégia médica focada em queima de gordura e preservação muscular.',
    disclaimer:
      '*Nota de responsabilidade médica: Os resultados variam de pessoa para pessoa, dependendo do perfil metabólico, adesão ao plano e parâmetros clínicos individuais.',
    clinicalIndicationsTitle: 'Indicações Clínicas e Sintomas Frequentes',
    clinicalIndications: [
      'Metabolismo lento e dificuldade de emagrecer mesmo com dieta',
      'Cansaço matinal crônico e fadiga ao longo do dia',
      'Alterações hormonais típicas do climatério e menopausa',
      'Insônia, sono picado ou sono não reparador',
      'Queda acentuada da libido e alterações de humor ou irritabilidade',
      'Sensação de inchaço constante e inflamação crônica',
      'Perda de tônus e massa muscular magra',
    ],
    featuresTitle: 'O Que o Protocolo Inclui',
    features: [
      'Avaliação médica minuciosa integrando eixos metabólico, endócrino e comportamental',
      'Estratégia de emagrecimento segura com preservação rigorosa da massa muscular',
      'Indicação de medicamentos e suplementação otimizada com critério clínico estrito',
      'Modulação e ajustes hormonais personalizados orientados por exames laboratoriais',
      'Acompanhamento contínuo voltado para a consolidação de hábitos e longevidade sustentável',
    ],
    image: '/images/glauber-mulheres.webp',
  },
  {
    id: 'homens',
    title: 'Reposição Hormonal Masculina',
    tagline: 'Restauração da disposição física, potência e foco mental',
    genderLabel: 'Para Homens',
    targetAudience: 'Homens entre 30 e 50 anos apresentando declínio androgênico ou queixas de vitalidade.',
    goal: 'Objetivo do Programa: Reequilíbrio dos níveis androgênicos, restauração da vitalidade física, performance sexual e clareza mental.',
    disclaimer:
      '*Nota de responsabilidade médica: A terapia de reposição hormonal (TRH) é indicada exclusivamente após criteriosa investigação diagnóstica e laboratorial.',
    clinicalIndicationsTitle: 'Sinais de Alerta para Avaliação Médica',
    clinicalIndications: [
      'Fadiga e cansaço constante, mesmo após uma noite completa de sono',
      'Queda significativa do desejo sexual e alterações na ereção',
      'Desânimo, apatia, irritabilidade sem causa aparente ou desmotivação',
      'Dificuldade de concentração, raciocínio lento e névoa mental',
      'Diminuição progressiva da força física e do rendimento nos treinos',
      'Aumento da gordura abdominal e perda progressiva de massa muscular',
    ],
    featuresTitle: 'Etapas do Acompanhamento Clínico',
    features: [
      'Consulta diagnóstica inicial profunda com anamnese funcional e histórico de estilo de vida',
      'Painel laboratorial completo de marcadores androgênicos, metabólicos e cardiovasculares',
      'Análise clínica personalizada sem fórmulas prontas ou dosagens universais',
      'Prescrição médica de reposição hormonal segura e biocompatível quando clinicamente indicada',
      'Monitoramento periódico com consultas de retorno para ajuste fino e controle de segurança',
    ],
    image: '/images/glauber-homens.webp',
  },
];

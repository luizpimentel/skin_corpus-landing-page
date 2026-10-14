import type { Doctor, SupportProfessional } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dra-fernanda-almeida',
    prefix: 'Dra.',
    name: 'Fernanda Almeida',
    crm: 'CRM 52.98567-8',
    specialty: 'Dermatologia Estética',
    focus: 'Rejuvenescimento facial e corporal com naturalidade (sem exageros e sem modismos).',
    consultationDuration: 'Primeira Consulta: 2 horas de dedicação exclusiva',
    image: '/images/fernanda.webp',
    link: '/dra-fernanda-almeida',
    approachTitle: 'O Método D.E.R.M.A.',
    approachSubtitle:
      'Uma metodologia autoral desenvolvida para entregar resultados refinados, respeitando a identidade de cada paciente.',
  },
  {
    id: 'dr-glauber-marinho',
    prefix: 'Dr.',
    name: 'Glauber Marinho',
    crm: 'CRM 52.90000-1',
    specialty: 'Endocrinologia, Nutrologia e Longevidade',
    focus: 'Emagrecimento saudável, equilíbrio hormonal para homens e mulheres e saúde metabólica integral.',
    consultationDuration: 'Consulta detalhada: até 1 hora de análise clínica',
    image: '/images/glauber-mulheres.webp',
    link: '/dr-glauber-marinho',
    education: [
      'Graduação em Medicina pela Universidade de Nova Iguaçu (UNIG)',
      'Pós-graduação em Endocrinologia pelo CENBRAP',
      'Especialização em Nutrologia pela ABRAN (Associação Brasileira de Nutrologia)',
    ],
    approachTitle: 'Terapia Combinada',
    approachSubtitle:
      'União de ajustes hormonais precisos, terapias nutricionais avançadas e estratégias comportamentais, sem fórmulas prontas.',
  },
];

export const SUPPORT_PROFESSIONALS: SupportProfessional[] = [
  {
    id: 'dr-helder-barroso',
    prefix: 'Dr.',
    name: 'Helder Barroso',
    registry: 'CRM 52.94237-5',
    specialty: 'Médico Cardiologista',
    phone: '5521973601475',
    focus: 'Ecocardiografia e Cardiologia Esportiva integrada ao bem-estar e performance física.',
    image: '/images/helder.webp',
  },
  {
    id: 'vanessa-brandi',
    prefix: '',
    name: 'Vanessa Brandi',
    registry: 'CRN 19100621',
    specialty: 'Nutrição Especializada',
    phone: '5521993053858',
    focus: 'Nutrição em Endocrinologia, Nutrição Esportiva e foco em Mulheres 40+ (Presencial RJ e SP / Online).',
    image: '/images/vanessa.webp',
  },
  {
    id: 'dr-glaucio-marinho',
    prefix: 'Dr.',
    name: 'Glaucio Marinho',
    registry: 'CRM 52.102553-8',
    specialty: 'Cirurgião Vascular',
    phone: '5521998052714',
    focus: 'Tratamento de varizes, saúde circulatória e prevenção de doenças vasculares.',
    image: '/images/glaucio.webp',
  },
];

export function getWhatsAppLink(pro: SupportProfessional, message?: string): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(`Olá! Estive no site Skin Corpus e gostaria de agendar uma consulta.`);
  return `https://wa.me/${pro.phone}?text=${text}`;
}
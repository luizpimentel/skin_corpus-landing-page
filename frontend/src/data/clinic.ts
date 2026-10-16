export const CLINIC_DATA = {
  name: 'SkinCorpus — Clínica Médica e Estética',
  shortName: 'SkinCorpus',
  tagline: 'Sua saúde e beleza cuidadas de dentro para fora na Barra da Tijuca',
  description:
    'Clínica médica especializada em rejuvenescimento facial e corporal com naturalidade, endocrinologia, emagrecimento sustentável e reposição hormonal personalizada.',
  welcomeMessage:
    'Estamos prontos para te receber em um ambiente acolhedor, sofisticado e reservado na Barra da Tijuca.',

  address: {
    street: 'Av. Sérgio Buarque de Holanda, 605',
    complement: 'Bloco 1A – Sala 1209, EUROPE Offices',
    neighborhood: 'Barra Olímpica',
    city: 'Rio de Janeiro',
    state: 'RJ',
    cep: '22775-024',
    fullFormatted:
      'Av. Sérgio Buarque de Holanda, 605 – Bloco 1A – Sala 1209, EUROPE Offices, Barra Olímpica. Rio de Janeiro – RJ, CEP 22775-024.',
  },

  contact: {
    // Números e contatos da clínica
    whatsappNumber: '5521999006521',
    whatsappFormatted: '(21) 99900-6521',
    phoneFormatted: '(21) 99900-6521',
    email: 'contato@skincorpus.com.br',
  },

  socials: {
    instagram: 'https://www.instagram.com/clinicaskincorpus/',
    instagramHandle: '@clinicaskincorpus',
    youtube: 'https://www.youtube.com/@skincorpusmkt',
    youtubeHandle: '@skincorpusmkt',
  },

  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.637207436691!2d-43.385750223798485!3d-22.97579997920703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2b8b993339%3A0xb36340bb9f52ba6e!2sAv.%20S%C3%A9rgio%20Buarque%20de%20Holanda%2C%20605%20-%20Barra%20Ol%C3%ADmpica%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-024!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    directLink:
      'https://maps.google.com/?q=Av.+S%C3%A9rgio+Buarque+de+Holanda,+605+Europe+Offices+Barra+da+Tijuca+Rio+de+Janeiro',
  },

  images: {
    logo: '/images/logo.png',
    heroBanner: '/images/hero-1.webp',
    heroDoctors: '/images/hero-doctors.webp',
    clinicAmbience: [
      {
        url: '/images/clinica-1.webp',
        alt: 'Consultório de atendimento médico premium da SkinCorpus com vista panorâmica',
        title: 'Consultórios Modernos e Privativos',
      },
      {
        url: '/images/clinica-2.webp',
        alt: 'Sala de procedimentos estéticos com tecnologia avançada',
        title: 'Tecnologia de Ponta e Conforto',
      },
      {
        url: '/images/clinica-3.webp',
        alt: 'Recepção acolhedora e intimista da clínica na Barra da Tijuca',
        title: 'Ambiente Acolhedor e Exclusivo',
      },
    ],
  },
};

export function getWhatsAppLink(message?: string): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent('Olá! Gostaria de agendar uma consulta na Skin Corpus.');
  return `https://wa.me/${CLINIC_DATA.contact.whatsappNumber}?text=${text}`;
}

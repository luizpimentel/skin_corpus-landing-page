import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import styles from './CombinedTherapy.module.css';

export const CombinedTherapy: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Ajustes Hormonais de Precisão',
      desc: 'Investigação profunda de eixos endócrinos através de exames laboratoriais detalhados, corrigindo desequilíbrios com segurança clínica rigorosa.',
    },
    {
      number: '02',
      title: 'Terapias Nutricionais Avançadas',
      desc: 'Planejamento metabólico focado na queima eficiente de gordura, preservação da massa magra e redução da inflamação celular.',
    },
    {
      number: '03',
      title: 'Estratégias Comportamentais',
      desc: 'Manejo do estresse, restauração da qualidade do sono e rotinas sustentáveis para garantir resultados duradouros ao longo dos anos.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal animation="fadeUp">
          <SectionTitle
            badge="Filosofia Clínica"
            title={
              <>
                A <span className="gold-text">Terapia Combinada</span>
              </>
            }
            subtitle="Uma abordagem integrativa onde hormônios, nutrição e estilo de vida atuam em perfeita harmonia — sem dietas restritivas e sem fórmulas prontas."
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.number} animation="fadeUp" delayMs={idx * 150}>
              <div className={`luxury-card ${styles.card}`}>
                <span className={styles.number}>{pillar.number}</span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

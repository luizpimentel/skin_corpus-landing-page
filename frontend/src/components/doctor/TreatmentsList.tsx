import React from 'react';
import { TREATMENTS } from '../../data/treatments';
import { TreatmentCard } from './TreatmentCard';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import styles from './TreatmentsList.module.css';

export const TreatmentsList: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal animation="fadeUp">
          <SectionTitle
            badge="Tecnologias & Procedimentos"
            title="Tratamentos de Alta Precisão"
            subtitle="Conheça os recursos dermatológicos e tecnologias consagradas indicadas de acordo com as necessidades biológicas da sua pele."
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          {TREATMENTS.map((treatment, idx) => (
            <Reveal key={treatment.id} animation="fadeUp" delayMs={idx * 120}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { DOCTORS } from '../../data/professionals';
import { DoctorCard } from './DoctorCard';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import styles from './MedicalTeam.module.css';

export const MedicalTeam: React.FC = () => {
  return (
    <section id="corpo-clinico" className={styles.section}>
      <div className="container" style={{ marginTop: '20px' }}>
        <Reveal animation="fadeUp">
          <SectionTitle
            badge="Excelência Médica"
            title="Corpo Clínico Especializado"
            subtitle="Conheça os profissionais responsáveis pelo padrão de atendimento e pelas metodologias autorais da Skin Corpus."
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          {DOCTORS.map((doctor, index) => (
            <Reveal key={doctor.id} animation="fadeUp" delayMs={index * 150}>
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

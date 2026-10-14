import React from 'react';
import type { Treatment } from '../../types';
import { Button } from '../ui/Button';
import { useAppointmentModal } from '../../context/AppointmentContext';
import styles from './TreatmentCard.module.css';

interface TreatmentCardProps {
  treatment: Treatment;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  const { openAppointment } = useAppointmentModal();

  return (
    <article className={`luxury-card ${styles.card}`}>
      <div className={styles.typeTag}>
        <span>{treatment.type}</span>
      </div>

      <div className={styles.header}>
        <h3 className={styles.title}>{treatment.name}</h3>
        <p className={styles.tagline}>{treatment.tagline}</p>
      </div>

      <p className={styles.description}>{treatment.description}</p>

      <div className={styles.benefitsSection}>
        <h4 className={styles.benefitsTitle}>Destaques do Tratamento:</h4>
        <ul className={styles.benefitsList}>
          {treatment.benefits.map((benefit, idx) => (
            <li key={idx}>
              <span className={styles.check}>✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.action}>
        <Button
          variant="secondary"
          size="sm"
          fullWidth
          onClick={() =>
            openAppointment({
              doctor: 'dra-fernanda-almeida',
              interest: treatment.name,
            })
          }
        >
          Agendar Avaliação deste Tratamento
        </Button>
      </div>
    </article>
  );
};

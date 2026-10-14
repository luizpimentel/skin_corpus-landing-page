import React from 'react';
import type { Doctor } from '../../types';
import { Button } from '../ui/Button';
import styles from './DoctorCard.module.css';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <article className={`luxury-card ${styles.card}`}>
      {/* Card imagem dos doutores */}
      <div className={styles.imageContainer}>
        <img
          src={doctor.image}
          alt={`${doctor.prefix} ${doctor.name} - ${doctor.specialty}`}
          className={styles.image}
          loading="lazy"
          width={400}
          height={480}
        />
        <div className={styles.badgeOverlay}>
          <span>{doctor.crm}</span>
        </div>
      </div>

      {/* Informações do card */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>
            {doctor.prefix} {doctor.name}
          </h3>
          <p className={styles.specialty}>{doctor.specialty}</p>
        </div>

        <p className={styles.focus}>{doctor.focus}</p>

        <div className={styles.durationBadge}>
          <span className={styles.durationIcon}>⏱</span>
          <span>{doctor.consultationDuration}</span>
        </div>

        {/* Botão: Conhecer */}
        <div className={styles.action}>
          <Button
            to={doctor.link}
            variant="primary"
            size="md"
            fullWidth
            rightIcon={<span aria-hidden="true">→</span>}
          >
            Conhecer {doctor.name.split(' ')[0]}
          </Button>
        </div>
      </div>
    </article>
  );
};

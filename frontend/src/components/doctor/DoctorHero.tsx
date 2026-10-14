import React from 'react';
import { Link } from 'react-router';
import type { Doctor } from '../../types';
import { Button } from '../ui/Button';
import { useAppointmentModal } from '../../context/AppointmentContext';
import styles from './DoctorHero.module.css';

interface DoctorHeroProps {
  doctor: Doctor;
  children?: React.ReactNode;
}

export const DoctorHero: React.FC<DoctorHeroProps> = ({ doctor, children }) => {
  const { openAppointment } = useAppointmentModal();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.breadcrumb}>
          <Link to="/" className={styles.backLink}>
            ← Voltar para a Página Inicial
          </Link>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Doctor Profile & Details */}
          <div className={styles.content}>
            <div className={styles.badges}>
              <span className="gold-badge">{doctor.crm}</span>
              <span className={styles.durationBadge}>⏱ {doctor.consultationDuration}</span>
            </div>

            <h1 className={styles.title}>
              {doctor.prefix} <span className="gold-text">{doctor.name}</span>
            </h1>

            <p className={styles.specialty}>{doctor.specialty}</p>

            <p className={styles.focus}>{doctor.focus}</p>

            {doctor.education && (
              <div className={styles.educationBox}>
                <h4 className={styles.educationTitle}>Formação e Títulos</h4>
                <ul className={styles.educationList}>
                  {doctor.education.map((item, idx) => (
                    <li key={idx}>
                      <span className={styles.bullet}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.actions}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => openAppointment({ doctor: doctor.id })}
              >
                Agendar Consulta com {doctor.prefix} {doctor.name.split(' ')[0]}
              </Button>
            </div>
          </div>

          {/* Right Column: Doctor Portrait in Luxury Frame */}
          <div className={styles.media}>
            <div className={styles.imageFrame}>
              <div className={styles.borderEffect} />
              <img
                src={doctor.image}
                alt={`${doctor.prefix} ${doctor.name} - ${doctor.specialty}`}
                className={styles.image}
                width={420}
                height={500}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
};
